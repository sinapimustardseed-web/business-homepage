"use client";

import { useEffect, type RefObject } from "react";

/**
 * Scroll-reveal for the new-design system. Every `[data-reveal]` element inside
 * the given root gets `data-revealed="true"` when it enters the viewport (the CSS
 * transitions it in). Elements already visible on mount reveal immediately.
 * Skipped entirely under prefers-reduced-motion (CSS also forces them visible).
 */
export function useReveal<T extends HTMLElement>(rootRef: RefObject<T | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.setAttribute("data-revealed", "true"));
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

    const track = (el: HTMLElement) => {
      if (el.hasAttribute("data-revealed")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.setAttribute("data-revealed", "true");
      } else {
        observer.observe(el);
      }
    };

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(track);

    // React can replace [data-reveal] nodes after this effect has run (a language
    // switch re-renders every translated string). Those fresh nodes start at
    // opacity: 0 and would never be observed, so watch for them and track them too.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.hasAttribute("data-reveal")) track(node);
          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(track);
        }
      }
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [rootRef]);
}
