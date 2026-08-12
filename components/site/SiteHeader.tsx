"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type FocusEvent, type KeyboardEvent } from "react";
import { useLanguage, useContent } from "@/context/LanguageContext";
import SwapText from "./SwapText";
import styles from "./site.module.css";

type ActiveKey = "home" | "products" | "contact" | "company";

export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const { header } = useContent().site;
  const pathname = usePathname() ?? "/";
  const [prodOpen, setProdOpen] = useState(false);

  const active: ActiveKey = pathname.startsWith("/products")
    ? "products"
    : pathname.startsWith("/company")
      ? "company"
      : pathname.startsWith("/contact")
        ? "contact"
        : "home";

  const closeOnEscape = (close: () => void) => (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  const closeOnBlur = (close: () => void) => (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
  };
  const cx = (...c: (string | false)[]) => c.filter(Boolean).join(" ");

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink} aria-label="cinapi home">
        <Image src="/brand/cinapi-logo.png" alt="cinapi" width={81} height={32} priority />
      </Link>

      <nav className={styles.nav} aria-label="Primary">
        <Link
          href="/"
          className={cx(styles.navLink, active === "home" && styles.navLinkActive)}
          aria-current={active === "home" ? "page" : undefined}
        >
          <SwapText>{header.home}</SwapText>
        </Link>

        <div
          className={styles.navItem}
          onMouseEnter={() => setProdOpen(true)}
          onMouseLeave={() => setProdOpen(false)}
          onFocus={() => setProdOpen(true)}
          onBlur={closeOnBlur(() => setProdOpen(false))}
          onKeyDown={closeOnEscape(() => setProdOpen(false))}
        >
          <Link
            href="/products"
            className={cx(styles.navLink, active === "products" && styles.navLinkActive)}
            aria-haspopup="menu"
            aria-expanded={prodOpen}
          >
            <SwapText>{header.products}</SwapText>
            <span className={styles.caret} aria-hidden="true">▾</span>
          </Link>
          {prodOpen && (
            <div className={`${styles.dropdown} ${styles.dropdownLeft}`} role="menu">
              <Link
                role="menuitem"
                href="/products"
                className={cx(styles.dropItem, pathname === "/products" && styles.dropItemActive)}
              >
                {header.introduction}
              </Link>
              <Link
                role="menuitem"
                href="/products/x-pile"
                className={cx(styles.dropItem, pathname === "/products/x-pile" && styles.dropItemActive)}
              >
                X-PILE
              </Link>
              <Link
                role="menuitem"
                href="/products/airdome"
                className={cx(styles.dropItem, pathname === "/products/airdome" && styles.dropItemActive)}
              >
                AIRDOME
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className={cx(styles.navLink, active === "contact" && styles.navLinkActive)}
          aria-current={active === "contact" ? "page" : undefined}
        >
          <SwapText>{header.contact}</SwapText>
        </Link>

        {/* COMPANY is a plain link, with no dropdown: Blog is hidden for now
            (Sein: "일단 BLOG는 숨겨놓자"), and Story was the dropdown's only
            other entry. The final Design renders COMPANY the same way. The
            /company/blog route and its content are left intact so the menu can
            be restored by reverting this block. */}
        <Link
          href="/company"
          className={cx(styles.navLink, active === "company" && styles.navLinkActive)}
          aria-current={active === "company" ? "page" : undefined}
        >
          <SwapText>{header.company}</SwapText>
        </Link>
      </nav>

      <div className={styles.langPill} role="group" aria-label="Language">
        <button
          type="button"
          onClick={() => setLanguage("ko")}
          aria-pressed={language === "ko"}
          className={cx(styles.langBtn, language === "ko" && styles.langBtnActive)}
        >
          KO
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={cx(styles.langBtn, language === "en" && styles.langBtnActive)}
        >
          EN
        </button>
      </div>
    </header>
  );
}
