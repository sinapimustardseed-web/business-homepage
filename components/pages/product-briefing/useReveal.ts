"use client";

import { useEffect, type RefObject } from "react";

/**
 * Recreates Home.dc.html's scroll-reveal: every `[data-reveal]` element inside the
 * given root gets `data-revealed="true"` once it enters the viewport (the CSS module
 * transitions it in). Elements already visible on mount reveal immediately. Skipped
 * entirely when the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement>(rootRef: RefObject<T | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.setAttribute("data-revealed", "true");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [rootRef]);
}
