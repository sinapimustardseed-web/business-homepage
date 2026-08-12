import { NextResponse } from "next/server";

/**
 * Contact form delivery.
 *
 * The form previously only flipped local state, so it always showed the
 * thank-you panel and never sent anything. Sending happens here, server-side,
 * so the provider credential is never exposed to the browser, and the UI is
 * only allowed to show success once the provider has accepted the message.
 *
 * Provider: Resend, called over its REST API with fetch — no extra dependency.
 * Required environment variables (server-only, never NEXT_PUBLIC_):
 *
 *   RESEND_API_KEY      API key from the Resend dashboard
 *   CONTACT_TO_EMAIL    recipient (the business address, e.g. the one shown on /contact)
 *   CONTACT_FROM_EMAIL  sender on a domain verified in Resend (e.g. no-reply@<verified domain>)
 *
 * With any of these unset the route reports "not configured" and the UI shows
 * its error state. It never reports success.
 */

// Node runtime: the in-memory rate limiter below needs a per-instance module scope.
export const runtime = "nodejs";

const MAX_BODY_BYTES = 32 * 1024;
const LIMITS = { name: 100, phone: 40, email: 254, message: 5000 };
const MIN_MESSAGE = 1;

// Deliberately permissive but anchored; the provider is the real authority.
const EMAIL_RE = /^[^\s@]+@[^\s@,;:]+\.[a-z]{2,}$/i;
// Korean forms carry +, -, spaces, parentheses and dots.
const PHONE_RE = /^[0-9+\-(). ]{6,40}$/;

/** Best-effort per-instance rate limit. Serverless spreads load across
 *  instances, so this throttles abuse rather than guaranteeing a global cap. */
const HITS = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  // Bound the map by dropping entries that have aged out, rather than wiping
  // every counter — a clear() would let anyone reset the limiter for everyone.
  if (HITS.size > 5000) {
    for (const [k, v] of HITS) if (v.every((t) => now - t >= WINDOW_MS)) HITS.delete(k);
    // Still over means a flood of fresh entries (spoofable x-forwarded-for).
    // Evict oldest-inserted — Map preserves insertion order — so memory stays
    // bounded without clear()ing every visitor's counter.
    if (HITS.size > 5000) {
      let excess = HITS.size - 5000;
      for (const k of HITS.keys()) { if (excess-- <= 0) break; HITS.delete(k); }
    }
  }
  // Test before recording, so retries while blocked do not keep pushing the
  // window forward and extend the block past its intended length.
  if (recent.length >= MAX_PER_WINDOW) {
    HITS.set(ip, recent);
    return true;
  }
  recent.push(now);
  HITS.set(ip, recent);
  return false;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Strip CR/LF so nothing a visitor types can forge an email header. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

type Fail = { error: string; status: number };
const fail = (error: string, status: number): Fail => ({ error, status });

export async function POST(req: Request) {
  // x-forwarded-for is client-controlled unless the platform overwrites it
  // (Vercel does). Treat the limiter as best-effort throttling, not a guarantee.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  try {
    if (req.headers.get("content-type")?.includes("application/json") !== true) {
      return NextResponse.json({ ok: false, error: "bad_request" }, { status: 415 });
    }

    const raw = await req.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
    }

    // Honeypot: a field hidden from people, so anything in it suggests a bot.
    // It is NOT treated as proof: browser autofill can put a value there on a
    // genuine inquiry, and this is the only lead channel the business has —
    // silently dropping a real message while telling the visitor it was
    // received is far worse than delivering one flagged spam mail. So the
    // message is still sent, marked for the recipient to judge.
    const suspected = typeof body.hp === "string" && body.hp.trim() !== "";

    const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
    const name = str(body.name);
    const phone = str(body.phone);
    const email = str(body.email);
    const message = str(body.message);

    const bad: Fail | null =
      !name || name.length > LIMITS.name ? fail("invalid_name", 400)
      : !phone || !PHONE_RE.test(phone) ? fail("invalid_phone", 400)
      : !email || email.length > LIMITS.email || !EMAIL_RE.test(email) ? fail("invalid_email", 400)
      : message.length < MIN_MESSAGE || message.length > LIMITS.message ? fail("invalid_message", 400)
      : null;
    if (bad) return NextResponse.json({ ok: false, error: bad.error }, { status: bad.status });

    // Rate limit only what would actually be sent. Counting rejected input too
    // would let a few typos lock a visitor out for the whole window.
    if (rateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      // Names only — never log or return the values.
      console.error("[contact] not configured; missing:", {
        RESEND_API_KEY: !apiKey,
        CONTACT_TO_EMAIL: !to,
        CONTACT_FROM_EMAIL: !from,
      });
      return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }

    const at = new Date().toISOString();
    const subject = oneLine(`${suspected ? "[확인필요] " : ""}[cinapi] 문의: ${name}`).slice(0, 180);
    // Korean first: the recipient reads Korean. The marker is deliberately not
    // the word "SPAM" — that is a strong spam token for the receiving provider,
    // and would junk exactly the false positive this flag exists to rescue.
    const note = suspected
      ? "\n[확인필요] 봇 방지용 숨김 필드에 값이 입력되었습니다. 대개 자동 발송이지만,\n" +
        "브라우저 자동완성 때문일 수도 있으니 삭제 전 확인해 주세요.\n" +
        "(Hidden anti-bot field was filled — usually automated, but a browser autofill\n" +
        "can do it on a genuine inquiry. Please check before discarding.)\n"
      : "";
    const text =
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n${note}\n` +
      `--\nSubmitted: ${at}\nSource: cinapi website contact form (/contact)`;
    const html =
      `<table cellpadding="6"><tbody>` +
      `<tr><td><b>Name</b></td><td>${esc(name)}</td></tr>` +
      `<tr><td><b>Phone</b></td><td>${esc(phone)}</td></tr>` +
      `<tr><td><b>Email</b></td><td>${esc(email)}</td></tr>` +
      `</tbody></table>` +
      `<p><b>Message</b></p><p style="white-space:pre-wrap">${esc(message)}</p>` +
      (suspected
        ? `<p style="color:#8a6d00;background:#fff8e1;padding:10px;border-radius:4px">` +
          `<b>[확인필요]</b> 봇 방지용 숨김 필드에 값이 입력되었습니다. 대개 자동 발송이지만, ` +
          `브라우저 자동완성 때문일 수도 있으니 삭제 전 확인해 주세요.<br>` +
          `<span style="color:#666">Hidden anti-bot field was filled — usually automated, but a ` +
          `browser autofill can do it on a genuine inquiry.</span></p>`
        : "") +
      `<hr><p style="color:#666;font-size:12px">Submitted: ${esc(at)}<br>` +
      `Source: cinapi website contact form (/contact)</p>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        // `from` must stay the verified sender; the visitor's address goes to
        // reply_to so replying reaches them without spoofing the domain.
        from: oneLine(from),
        to: [oneLine(to)],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      // Log the provider's reason server-side; return something generic.
      console.error("[contact] provider rejected", { status: res.status, body: await res.text().catch(() => "") });
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    const data = (await res.json().catch(() => ({}))) as { id?: string };
    console.info("[contact] accepted by provider", { id: data.id ?? null, suspected });
    return NextResponse.json({ ok: true, id: data.id ?? null });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
