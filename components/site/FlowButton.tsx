"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./site.module.css";

/**
 * The Claude Design's `.flowbtn`: an outline pill that resolves on hover into a
 * filled, 12px-radius button. The fill is a circle scaling up from the centre
 * (16px → 340px) rather than a background swap, and a pair of arrows flies
 * through the button — the left one in from off-canvas, the right one out —
 * while the label slides from -12px to +12px.
 *
 * Values are taken from the Design's stylesheet verbatim; see .flowBtn in
 * site.module.css. `dark` is the Design's `.flowbtn-dark` variant used on the
 * dark philosophy band.
 *
 * `hoverFromParent` drops the button's own :hover trigger so an ancestor can
 * drive it instead — the Design does this on the Products Introduction bands,
 * where hovering anywhere on the band animates the button (`.sol-band:hover
 * .flowbtn`).
 */
export default function FlowButton({
  href,
  type,
  form,
  children,
  dark = false,
  hoverFromParent = false,
  disabled = false,
  className = "",
}: {
  href?: string;
  type?: "submit" | "button";
  form?: string;
  children: ReactNode;
  dark?: boolean;
  hoverFromParent?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  const cls = [
    styles.flowBtn,
    dark && styles.flowBtnDark,
    hoverFromParent && styles.flowBtnParent,
    disabled && styles.flowBtnDisabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const arrow = (side: "l" | "r") => (
    <svg
      className={`${styles.fbArr} ${side === "l" ? styles.fbArrL : styles.fbArrR}`}
      aria-hidden="true"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );

  const inner = (
    <>
      {arrow("l")}
      <span className={styles.fbTxt}>{children}</span>
      <span className={styles.fbCircle} aria-hidden="true" />
      {arrow("r")}
    </>
  );

  // A span when the parent is the link/button (the Design's band case).
  if (hoverFromParent && !href && !type) return <span className={cls}>{inner}</span>;
  if (type) return <button type={type} form={form} className={cls} disabled={disabled}>{inner}</button>;
  // A disabled link still navigates, so mark it and drop it from the tab order
  // rather than only fading it.
  return (
    <Link
      href={href ?? "#"}
      className={cls}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
    >
      {inner}
    </Link>
  );
}
