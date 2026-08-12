"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./productPage.module.css";

export type AppCard = {
  category: string;
  name: string;
  subName: string;
  desc: string;
  chips: string[];
  img: string;
};

/**
 * Applications gallery — the Claude Design's scroll-pinned rail, with idle
 * autoplay and manual drag layered on top (per 희원's meeting requirement that
 * the cards both respond to the visitor AND move on their own).
 *
 * All three inputs write to ONE logical position so they can never fight:
 *
 *   scrollLeft = mod(pinnedProgress * maxScroll + autoPx, loopWidth)
 *
 * `pinnedProgress` (0…1) comes from the pin section's position exactly as the
 * Design computes it. `autoPx` is the only value autoplay and dragging touch.
 * With autoPx = 0 the expression reduces to the Design's own mapping, so the
 * pinned behaviour is reproduced faithfully; autoplay and drag simply offset
 * it. Rebasing autoPx after the visitor moves the rail is what stops the next
 * scroll event from snapping it back.
 *
 * The card set is repeated (extra copies inert + aria-hidden), so wrapping at
 * the loop period lands on visually identical content — no snap at the
 * boundary. The same engine drives X-PILE and AIRDOME; they differ only in
 * their cards.
 */

/** Idle delay before autoplay takes over. The Design defines no value. */
const IDLE_MS = 3000;
/** Autoplay speed — ~8s per 352px card. The Design defines no value. */
const AUTO_PX_PER_SEC = 45;
/** Below this width the pin is disabled; see .appsPin in the stylesheet. */
const PIN_MIN_WIDTH = 900;

export default function ApplicationsRail({
  apps,
  label,
  title,
  count,
}: {
  apps: AppCard[];
  label: string;
  title: string;
  count: string;
}) {
  const pinRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const n = apps.length;
  /**
   * How many times the card set is laid out. Two is enough only while one
   * trailing set can still fill the viewport; past that the wrap has nowhere
   * to land and autoplay has to switch off. That threshold scales with the
   * number of cards, so AIRDOME (6) lost autoplay ~370px earlier than X-PILE
   * (7) and looked broken on wide screens while X-PILE still worked. Sizing
   * the track to the viewport keeps both identical at every width.
   */
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const pin = pinRef.current;
    const rail = railRef.current;
    if (!pin || !rail) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let autoPx = 0;
    let lastApplied = -1;
    let idleUntil = 0;
    let visible = false;
    let raf = 0;
    let lastTs = 0;

    /**
     * Rail geometry, remeasured on demand: the card width is a clamp() of vw and
     * the full-bleed rail's left inset grows with the viewport, so none of this
     * can be cached across resizes.
     *
     *   period    distance from a card to its duplicate — the loop period
     *   maxScroll the travel the Design maps progress across. The Design uses
     *             `rail.scrollWidth - rail.clientWidth` on an unduplicated rail,
     *             which includes the rail's padding; reconstruct exactly that
     *             from one set. Leaving the padding out understates the travel,
     *             so the last card never reaches the viewport — and on wide or
     *             zoomed-out screens (where the left inset is large) it collapses
     *             to zero and the pinned section stops moving altogether.
     *   canLoop   one duplicate only covers a wrap if the trailing set can fill
     *             the viewport. Wider than that and every card already fits, so
     *             there is nothing to loop through.
     */
    const measure = () => {
      const cards = rail.querySelectorAll<HTMLElement>("[data-app-card]");
      if (cards.length < n + 1) return null;
      const cs = getComputedStyle(rail);
      const padL = parseFloat(cs.paddingLeft) || 0;
      const padR = parseFloat(cs.paddingRight) || 0;
      const first = cards[0];
      const last = cards[n - 1];
      const setSpan = last.offsetLeft + last.offsetWidth - first.offsetLeft;
      const client = rail.clientWidth;
      const period = cards[n].offsetLeft - first.offsetLeft;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      // Folding tops out at padL + period, so the track must reach
      // padL + period + client. With K sets it spans padL + K*period - gap + padR,
      // giving K >= 1 + (client + gap - padR) / period.
      const need = period > 0
        ? Math.min(6, Math.max(2, 1 + Math.ceil((client + gap - padR) / period)))
        : 2;
      return {
        padL,
        period,
        need,
        maxScroll: Math.max(0, padL + setSpan + padR - client),
        canLoop: period > 0 && client + gap - padR <= (copies - 1) * period,
      };
    };
    type M = NonNullable<ReturnType<typeof measure>>;

    const pinned = () => {
      if (window.innerWidth < PIN_MIN_WIDTH) return null;
      const travel = pin.offsetHeight - window.innerHeight;
      if (travel <= 0) return null;
      return Math.max(0, Math.min(1, -pin.getBoundingClientRect().top / travel));
    };

    /** The position the Design alone would produce right now. */
    const base = (m: M) => (pinned() ?? 0) * m.maxScroll;

    /**
     * Fold a position back by whole periods.
     *
     * Content only repeats for x >= padL: below that sits the rail's left
     * inset, which has no counterpart a period later. So [0, padL) is the
     * one-off run-in the rail starts on, and once autoplay has carried the
     * position past padL + period it must wrap back to padL — never to 0.
     * Subtracting whole periods from the top does exactly that; nothing is
     * added back below, because those positions are genuinely non-periodic.
     *
     * The position — not autoPx — is the loop state. Reducing autoPx by the
     * period on its own would re-impose a [0, period) cycle and put the wrap
     * back at 0, which is what made a whole card blink out.
     */
    const fold = (x: number, m: M) => {
      if (!m.canLoop) return Math.max(0, Math.min(x, m.maxScroll));
      let v = Math.max(0, x);
      while (v >= m.padL + m.period) v -= m.period;
      return v;
    };

    const apply = () => {
      const m = measure();
      if (!m) return;
      const next = fold(base(m) + autoPx, m);
      lastApplied = next;
      rail.scrollLeft = next;
    };

    /**
     * Keep the visitor's position after they take control, so nothing snaps.
     * autoPx is a plain offset from the pinned base — deliberately not reduced
     * modulo the period, so that apply() reproduces exactly the position the
     * visitor left the rail at. (Reducing it here made positions below padL
     * round-trip to a different place, discarding the drag.)
     */
    const rebase = () => {
      const m = measure();
      if (!m) return;
      autoPx = rail.scrollLeft - base(m);
      lastApplied = rail.scrollLeft;
    };

    const interact = () => {
      idleUntil = performance.now() + IDLE_MS;
    };

    /**
     * Keep the track long enough for the current viewport, and drop the pin
     * when the Design's mapping yields no travel at all (very wide viewports,
     * where every card already fits) — otherwise the section would stick for
     * 320vh while the rail sat still.
     */
    const syncLayout = () => {
      const m = measure();
      if (!m) return;
      if (m.need !== copies) setCopies(m.need);
      pin.toggleAttribute("data-no-travel", m.maxScroll < 40);
    };

    // ---- vertical page scroll drives the rail (Design behaviour) -----------
    let scrollRaf = 0;
    const onScroll = () => {
      interact();
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        apply();
      });
    };

    // ---- the visitor moving the rail itself (wheel / touch / scrollbar) ----
    const onRailScroll = () => {
      // Distinguish our own write from a user-driven one.
      if (Math.abs(rail.scrollLeft - lastApplied) < 1) return;
      rebase();
      interact();
    };

    // ---- pointer drag (mouse / pen; touch pans natively) ------------------
    let dragId: number | null = null;
    let dragX = 0;
    let dragLeft = 0;
    let moved = false;
    const swallowClick = (c: Event) => c.preventDefault();

    const onPointerDown = (e: PointerEvent) => {
      // Touch already pans natively; hijacking it would trap vertical scroll.
      if (e.pointerType === "touch") return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragId = e.pointerId;
      dragX = e.clientX;
      dragLeft = rail.scrollLeft;
      moved = false;
      interact();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (dragId !== e.pointerId) return;
      const dx = e.clientX - dragX;
      if (!moved) {
        if (Math.abs(dx) < 3) return;
        moved = true;
        rail.setPointerCapture(e.pointerId);
        rail.classList.add(styles.appScrollDragging);
      }
      const m = measure();
      rail.scrollLeft = m ? fold(dragLeft - dx, m) : dragLeft - dx;
      rebase();
      interact();
    };
    const endDrag = (e: PointerEvent) => {
      if (dragId !== e.pointerId) return;
      if (moved) {
        rail.classList.remove(styles.appScrollDragging);
        if (rail.hasPointerCapture(e.pointerId)) rail.releasePointerCapture(e.pointerId);
        // Swallow the click a drag would otherwise fire on the card underneath.
        rail.addEventListener("click", swallowClick, { capture: true, once: true });
      }
      dragId = null;
      rebase();
      interact();
    };

    // ---- idle autoplay ----------------------------------------------------
    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0;
      lastTs = ts;
      if (reduced.matches || !visible || document.hidden) return;
      if (ts < idleUntil || dragId !== null) return;
      const m = measure();
      if (!m || !m.canLoop) return;
      autoPx += AUTO_PX_PER_SEC * dt;
      // Keep autoPx bounded by discounting a whole period only once the
      // combined position has actually crossed the fold ceiling — so the wrap
      // lands on padL (periodic) rather than on base (not periodic).
      if (base(m) + autoPx >= m.padL + m.period) autoPx -= m.period;
      apply();
    };

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, {
      threshold: 0,
    });
    io.observe(pin);

    // Returning to the tab shouldn't lurch — restart the idle countdown.
    const onVisibility = () => { if (!document.hidden) interact(); };
    // Honour the OS motion setting being toggled without a reload.
    const onReduced = () => { interact(); apply(); };
    reduced.addEventListener("change", onReduced);

    const onResize = () => { syncLayout(); onScroll(); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    rail.addEventListener("scroll", onRailScroll, { passive: true });
    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);
    document.addEventListener("visibilitychange", onVisibility);

    syncLayout();
    apply();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      rail.removeEventListener("scroll", onRailScroll);
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endDrag);
      rail.removeEventListener("pointercancel", endDrag);
      rail.removeEventListener("click", swallowClick, { capture: true });
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onReduced);
    };
  }, [n, copies]);

  const card = (a: AppCard, i: number, dup: boolean, copy = 0) => (
    // Index key: a.name is translated, and remounting would needlessly tear
    // down and reload the <Image>.
    <div key={`${dup ? `d${copy}` : "o"}${i}`} data-app-card className={styles.appCard}>
      <div className={styles.appImgBox}>
        <Image
          src={a.img}
          alt={dup ? "" : a.name}
          fill
          sizes="(max-width: 900px) 90vw, 352px"
          className={styles.appImg}
        />
      </div>
      <div className={styles.appCategory}>{a.category}</div>
      <div className={styles.appNameRow}>
        <h3 className={styles.appName}>{a.name}</h3>
        {a.subName && <span className={styles.appSub}>{a.subName}</span>}
      </div>
      <p className={styles.appDesc}>{a.desc}</p>
      <div className={styles.appChips}>
        {a.chips.map((chip) => (
          <span key={chip} className={styles.appChip}>{chip}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={pinRef} className={styles.appsPin}>
      <div className={styles.appsStage}>
        <div className={styles.appsHead}>
          <div>
            <div className={styles.appsLabel}>{label}</div>
            <h2 className={styles.appsTitle}>{title}</h2>
          </div>
          <div className={styles.appsCount}>{count}</div>
        </div>
        <div ref={railRef} className={styles.appScroll}>
          {apps.map((a, i) => card(a, i, false))}
          {/* Presentation-only repeats so the loop has no visible seam. How many
              are needed depends on the viewport (see `copies`); inert keeps them
              out of the tab order and the accessibility tree, so the semantic
              content still exists exactly once. */}
          {Array.from({ length: copies - 1 }, (_, c) => (
            <div key={c} className={styles.appLoopCopy} aria-hidden="true" inert>
              {apps.map((a, i) => card(a, i, true, c))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
