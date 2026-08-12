"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import ContactMap from "@/components/site/ContactMap";
import FlowButton from "@/components/site/FlowButton";
import styles from "./contact.module.css";

// Lets the submit button live outside <form> (its own centred grid row) while
// still being owned by it.
const FORM_ID = "contact-form";

export default function ContactPage() {
  const { contact } = useContent().site;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Bot trap. Named `hp`, not `company`: `company` maps onto Chrome's
  // COMPANY_NAME autofill type, so a real visitor accepting an address
  // suggestion would fill it. The server flags rather than drops, so even a
  // false positive still reaches the business.
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sendingRef = useRef(false);
  const thanksRef = useRef<HTMLDivElement>(null);
  // The form is replaced by the panel, so focus would otherwise fall to <body>
  // and a screen reader would never hear the confirmation.
  useEffect(() => { if (status === "sent") thanksRef.current?.focus({ preventScroll: true }); }, [status]);
  const submitted = status === "sent";

  /**
   * Posts to /api/contact and only shows the thank-you panel once the server
   * confirms the provider accepted the message. On failure the entered values
   * are kept so the visitor can retry without retyping.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Guard on a ref, not on `status`: several clicks dispatched in one tick all
    // read the pre-render state and would each fire a request.
    if (sendingRef.current) return;
    sendingRef.current = true;
    setStatus("sending");
    // AbortController, not AbortSignal.timeout(): the latter is Safari 16+ /
    // iOS 16+, and calling it on an older device throws a TypeError that the
    // catch below would swallow — the request would never leave the browser and
    // the visitor would see "sending failed" forever, on the only lead channel
    // the business has. AbortController is universally supported.
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message, hp }),
        signal: ctrl.signal,
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setStatus("sent");
      setName(""); setPhone(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timer);
      sendingRef.current = false;
    }
  };

  return (
    <SiteChrome>
      <main>
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <div className={styles.kickerRow}>
              <span className={styles.kicker}>{contact.kicker}</span>
              {/* Decorative rule removed per the latest design; the CONTACT label stays. */}
            </div>
            <h1 className={styles.title}>{contact.title}</h1>
            <p className={styles.body}>{contact.body}</p>
          </div>
        </section>

        <section className={styles.grid}>
          <div>
            {submitted ? (
              <div className={styles.thanks} role="status" aria-live="polite" tabIndex={-1} ref={thanksRef}>
                <div className={styles.thanksTitle}>{contact.thanksTitle}</div>
                <p className={styles.thanksBody}>{contact.thanksBody}</p>
              </div>
            ) : (
              <form id={FORM_ID} className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <label className={styles.fieldLabel} htmlFor="c-name">{contact.labels.name}</label>
                  <input id="c-name" className={styles.input} type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder={contact.placeholders.name} />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="c-phone">{contact.labels.phone}</label>
                  <input id="c-phone" className={styles.input} type="tel" autoComplete="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={contact.placeholders.phone} />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="c-email">{contact.labels.email}</label>
                  <input id="c-email" className={styles.input} type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={contact.placeholders.email} />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="c-message">{contact.labels.message}</label>
                  <textarea id="c-message" className={styles.textarea} autoComplete="off" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={contact.placeholders.message} />
                </div>
                {/* Honeypot — off-screen, not announced, never focusable. */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="c-hp">Leave this field empty</label>
                  <input id="c-hp" name="hp" type="text" tabIndex={-1} autoComplete="off"
                    value={hp} onChange={(e) => setHp(e.target.value)} />
                </div>
              </form>
            )}
          </div>

          {/* The design centres the submit pill on the section, not on the form
              column, so it is its own full-width grid row. The button stays owned
              by the form through the `form` attribute, which keeps `required`
              validation and the submit handler exactly as they were. */}
          {!submitted && (
            <div className={styles.submitRow}>
              <FlowButton type="submit" form={FORM_ID} disabled={status === "sending"}>
                {status === "sending" ? contact.sending : contact.submit}
              </FlowButton>
              {status === "error" && (
                <p className={styles.formError} role="alert">{contact.errorBody}</p>
              )}
            </div>
          )}

          <div className={styles.infoCol}>
            <div className={styles.info}>
              <div>
                <div className={styles.infoLabel}>{contact.emailLabel}</div>
                <div className={styles.infoEmail}>{contact.email}</div>
              </div>
              <div>
                <div className={styles.infoLabel}>{contact.addressLabel}</div>
                <div className={styles.infoAddress}>{contact.address}</div>
              </div>
              <ContactMap />
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
