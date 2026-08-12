"use client";

import { useEffect, type RefObject } from "react";

/**
 * "One deliberate scroll = one section" for X-PILE, AIR DOME and Company
 * (To_Fix_Meeting_Instructions.pdf, item 6).
 *
 * Native CSS scroll-snap was tried first and cannot express this page. Two things
 * rule it out:
 *
 *  - `scroll-snap-type: y mandatory` forbids the scroll port ever resting between
 *    snap points. The applications rail is a 320vh pinned section whose horizontal
 *    progression IS the act of resting part-way down it, so mandatory snapping
 *    would either skip the interaction entirely or fight it every frame.
 *  - `proximity` snapping does not give "one gesture = one section" at all: a
 *    trackpad fling still travels its full inertial distance and only settles
 *    afterwards, which is exactly the runaway skipping the meeting asked to avoid.
 *
 * So this is the smallest controlled enhancement instead: wheel events pick the
 * next/previous stop and hand the actual movement back to the browser's own smooth
 * scrolling. Everything else — keyboard, scrollbar, touch, anchors, Back/Forward —
 * is left completely alone, so nothing can trap the page.
 *
 * Stops are measured from the real viewport every time a gesture starts, never from
 * fixed pixel values, because the Claude Design preview window is not the size of a
 * real browser (the meeting said so explicitly).
 */

/** The site's single breakpoint; below it the rail unpins and touch takes over. */
const MIN_WIDTH = 900;
/** Ignore sub-pixel trackpad noise. */
const WHEEL_THRESHOLD = 8;
/** Quiet time that separates two deliberate gestures — this is what stops one
 *  inertial fling from racing through three or four sections. */
const GESTURE_GAP_MS = 140;
/** Never hold the lock longer than this after landing, even mid-fling. */
const MAX_HOLD_MS = 600;
/** Hard release, so a dropped animation frame can never leave the page stuck. */
const SETTLE_TIMEOUT_MS = 1200;
/** Stops closer together than this collapse into one. */
const MERGE_PX = 80;
/** A section only earns intermediate stops once its overflow is worth a gesture.
 *  Company's narrative band is 912px in an 855px viewport: stepping through 57px of
 *  travel spent a whole deliberate scroll going almost nowhere. Below this share of
 *  the viewport the section gets a single top-aligned stop instead, so the overflow
 *  is taken off the BOTTOM — where these sections carry 150px of padding — rather
 *  than off the top, where it would push the heading under the fixed header. */
const MIN_STEP_SHARE = 0.25;
/** Breathing room between the header and a short section that has room to spare. */
const MAX_LEAD_PX = 48;

export function useSectionSnap<T extends HTMLElement>(
  mainRef: RefObject<T | null>,
  key?: unknown,
) {
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // A fine pointer that can hover is a mouse or trackpad. Touch screens keep
    // native vertical scrolling until the deployed preview is tested on a real
    // device, per the meeting's desktop-first order.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let stops: number[] = [];
    let locked = false;
    let lastWheelTs = 0;
    let settleTs = 0;
    let releaseTimer = 0;
    let settleRaf = 0;

    const enabled = () =>
      fine.matches && !reduced.matches && window.innerWidth >= MIN_WIDTH;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    /** Measured, not assumed — the header is taller once it wraps below 900px. */
    const headerHeight = () => {
      const el = document.querySelector<HTMLElement>("header");
      return el ? Math.round(el.getBoundingClientRect().height) : 0;
    };

    /**
     * Where a deliberate scroll is allowed to come to rest.
     *
     * Short section  — seated just below the fixed header with a small lead-in, not
     *                  mathematically centred in the band. Perfect centring pushes the
     *                  section down far enough that the tail of the section ABOVE it
     *                  reappears at the top of the viewport, and on Company that sliced
     *                  the closing sentence in half behind the translucent header —
     *                  the "cut off due to header height" the meeting called out. The
     *                  lead is capped, so a short section still reads as deliberately
     *                  placed rather than jammed under the header.
     * Viewport-tall  — top-aligned; these sections already centre their own content,
     *                  so centring them again would double the offset. A section that
     *                  overflows by less than MIN_STEP_SHARE lands here too: taking
     *                  that small overflow off the bottom keeps the heading clear of
     *                  the header, which the meeting asked for explicitly, whereas
     *                  splitting it evenly would eat into the heading instead.
     * Much taller than the viewport — stepped through in equal instalments no larger than
     *                  one viewport. This is what keeps the applications rail usable:
     *                  its 320vh pin becomes several stops, each advancing the pinned
     *                  progress (and therefore the cards) by an equal share, and only
     *                  the last one hands over to the section below.
     */
    const build = () => {
      const V = window.innerHeight;
      const head = headerHeight();
      const usable = Math.max(1, V - head);
      const limit = maxScroll();
      const out: number[] = [];

      for (const node of Array.from(main.children)) {
        if (!(node instanceof HTMLElement)) continue;
        const rect = node.getBoundingClientRect();
        const height = rect.height;
        if (height <= 1) continue;
        const top = rect.top + window.scrollY;

        if (height > V + 8 && height - V >= V * MIN_STEP_SHARE) {
          const travel = height - V;
          const steps = Math.max(1, Math.ceil(travel / V));
          for (let i = 0; i <= steps; i++) out.push(top + (travel * i) / steps);
        } else if (height >= usable - 8) {
          out.push(top);
        } else {
          const lead = Math.min(MAX_LEAD_PX, (usable - height) / 2);
          out.push(top - head - lead);
        }
      }

      // The footer lives outside <main>; without this the page bottom would have no
      // stop of its own and the last gesture could never reach it.
      out.push(limit);

      const sorted = out
        .map((v) => Math.round(Math.max(0, Math.min(limit, v))))
        .sort((a, b) => a - b);
      stops = sorted.filter((v, i) => i === 0 || v - sorted[i - 1] > MERGE_PX);
    };

    const clearTimers = () => {
      if (settleRaf) cancelAnimationFrame(settleRaf);
      if (releaseTimer) window.clearTimeout(releaseTimer);
      settleRaf = 0;
      releaseTimer = 0;
    };

    /** Release once the visitor's gesture has actually ended (or we have waited long
     *  enough that holding on would feel like a stuck page). */
    const armRelease = () => {
      clearTimers();
      settleTs = performance.now();
      const check = () => {
        const now = performance.now();
        if (now - lastWheelTs >= GESTURE_GAP_MS || now - settleTs >= MAX_HOLD_MS) {
          locked = false;
          releaseTimer = 0;
          return;
        }
        releaseTimer = window.setTimeout(check, GESTURE_GAP_MS);
      };
      check();
    };

    const waitForSettle = (target: number) => {
      clearTimers();
      let still = 0;
      let last = Number.NaN;
      const tick = () => {
        const y = window.scrollY;
        if (Math.abs(y - target) <= 2 || y === last) still += 1;
        else still = 0;
        last = y;
        if (still >= 3) {
          armRelease();
          return;
        }
        settleRaf = requestAnimationFrame(tick);
      };
      settleRaf = requestAnimationFrame(tick);
      releaseTimer = window.setTimeout(armRelease, SETTLE_TIMEOUT_MS);
    };

    /** @returns false when there is nothing further that way, so the caller can let
     *  the browser scroll normally rather than swallowing the event. */
    const go = (dir: 1 | -1) => {
      build();
      if (stops.length < 2) return false;
      const y = window.scrollY;
      let target: number | undefined;
      if (dir === 1) {
        target = stops.find((s) => s > y + 4);
      } else {
        for (let i = stops.length - 1; i >= 0; i -= 1) {
          if (stops[i] < y - 4) {
            target = stops[i];
            break;
          }
        }
      }
      if (target === undefined) return false;
      locked = true;
      window.scrollTo({ top: target, behavior: "smooth" });
      waitForSettle(target);
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (!enabled()) return;
      // Ctrl+wheel is browser zoom, and a mostly-horizontal wheel belongs to the
      // applications rail rather than to the page.
      if (e.ctrlKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      lastWheelTs = performance.now();

      // Mid-transition: swallow the remainder of the gesture. This is the whole
      // reason a high-resolution trackpad cannot run away through several sections.
      if (locked) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      if (go(e.deltaY > 0 ? 1 : -1)) e.preventDefault();
    };

    /**
     * Attach only where the feature actually runs.
     *
     * preventDefault requires a non-passive wheel listener, and a non-passive
     * listener costs the browser its passive-scrolling fast path for the whole
     * window. Registering one unconditionally would make touch devices and
     * reduced-motion users pay that cost for a handler that does nothing on them,
     * which is the opposite of leaving their scrolling alone. So the listener
     * follows `enabled()`, re-evaluated when the viewport or either media query
     * changes.
     */
    let attached = false;
    const sync = () => {
      const on = enabled();
      if (on === attached) return;
      if (on) window.addEventListener("wheel", onWheel, { passive: false });
      else window.removeEventListener("wheel", onWheel);
      attached = on;
    };

    window.addEventListener("resize", sync);
    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    sync();
    build();

    return () => {
      if (attached) window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", sync);
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      clearTimers();
    };
  }, [mainRef, key]);
}
