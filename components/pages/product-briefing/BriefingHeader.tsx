"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FocusEvent, type KeyboardEvent } from "react";
import { useLanguage, useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function BriefingHeader() {
  const { language, setLanguage } = useLanguage();
  const { nav } = useContent().productBriefing;
  const [prodOpen, setProdOpen] = useState(false);
  const [coOpen, setCoOpen] = useState(false);

  const closeOnEscape = (close: () => void) => (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  const closeOnBlur = (close: () => void) => (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink} aria-label="cinapi home">
        <Image src="/brand/cinapi-logo.png" alt="cinapi" width={81} height={32} priority />
      </Link>

      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} aria-current="page">
          {nav.home}
        </Link>

        <div
          className={styles.navItem}
          onMouseEnter={() => setProdOpen(true)}
          onMouseLeave={() => setProdOpen(false)}
          onFocus={() => setProdOpen(true)}
          onBlur={closeOnBlur(() => setProdOpen(false))}
          onKeyDown={closeOnEscape(() => setProdOpen(false))}
        >
          <Link href="/products" className={styles.navLink} aria-haspopup="menu" aria-expanded={prodOpen}>
            {nav.products}
            <span className={styles.caret} aria-hidden="true">▾</span>
          </Link>
          {prodOpen && (
            <div className={`${styles.dropdown} ${styles.dropdownLeft}`} role="menu">
              <Link role="menuitem" className={styles.dropItem} href="/products">
                {nav.introduction}
              </Link>
              <Link role="menuitem" className={styles.dropItem} href="/products/x-pile">
                X-PILE
              </Link>
              <Link role="menuitem" className={styles.dropItem} href="/products/airdome">
                AIRDOME
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact" className={styles.navLink}>
          {nav.contact}
        </Link>

        <div
          className={styles.navItem}
          onMouseEnter={() => setCoOpen(true)}
          onMouseLeave={() => setCoOpen(false)}
          onFocus={() => setCoOpen(true)}
          onBlur={closeOnBlur(() => setCoOpen(false))}
          onKeyDown={closeOnEscape(() => setCoOpen(false))}
        >
          <Link href="/company" className={styles.navLink} aria-haspopup="menu" aria-expanded={coOpen}>
            {nav.company}
            <span className={styles.caret} aria-hidden="true">▾</span>
          </Link>
          {coOpen && (
            <div className={`${styles.dropdown} ${styles.dropdownRight}`} role="menu">
              <Link role="menuitem" className={styles.dropItem} href="/company">
                {nav.story}
              </Link>
              <Link role="menuitem" className={styles.dropItem} href="/company/blog">
                {nav.blog}
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className={styles.langPill} role="group" aria-label="Language">
        <button
          type="button"
          onClick={() => setLanguage("ko")}
          aria-pressed={language === "ko"}
          className={`${styles.langBtn} ${language === "ko" ? styles.langBtnActive : ""}`}
        >
          KO
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={`${styles.langBtn} ${language === "en" ? styles.langBtnActive : ""}`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
