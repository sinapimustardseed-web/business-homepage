"use client";

import { useRef, type ReactNode } from "react";
import styles from "./site.module.css";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { useReveal } from "./useReveal";

/**
 * Wraps every migrated route with the shared new-design chrome: design tokens +
 * fonts on the root, fixed header, dark footer, grain overlay, and scroll-reveal
 * for any [data-reveal] descendant. Pages pass their own <main>…</main>.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef} className={styles.pageRoot}>
      <SiteHeader />
      {children}
      <SiteFooter />
      <div className={styles.grain} aria-hidden="true" />
    </div>
  );
}
