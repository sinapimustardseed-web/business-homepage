"use client";

import styles from "./site.module.css";

/**
 * The Claude Design's navigation hover: each character sits in a clipped box
 * holding two stacked copies. On hover the top copy rolls up and out while the
 * duplicate rolls in from below, per-character delays staggering the roll into
 * a wave.
 *
 * The Design builds this imperatively in `buildSwapLabels()` and gives each
 * character `Math.random() * 0.22s` of delay. A random value would differ
 * between the server and client renders and trip hydration, so the stagger is
 * derived from the character index instead — same 0–0.22s spread, same visual
 * effect, stable across renders.
 *
 * The moving copy is aria-hidden so a screen reader reads the label once.
 */
export default function SwapText({ children }: { children: string }) {
  return (
    <span className={styles.swap} data-swap>
      {[...children].map((ch, i) => {
        // Deterministic stagger in [0, 0.22s) — an irrational step keeps
        // neighbouring characters from landing on the same delay.
        const delay = `${(((i * 0.618) % 1) * 0.22).toFixed(3)}s`;
        return (
          <span key={i} className={styles.swapChar}>
            <span className={styles.swapA} style={{ transitionDelay: delay }}>
              {ch === " " ? " " : ch}
            </span>
            <span className={styles.swapB} style={{ transitionDelay: delay }} aria-hidden="true">
              {ch === " " ? " " : ch}
            </span>
          </span>
        );
      })}
    </span>
  );
}
