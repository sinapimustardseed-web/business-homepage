"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";
import styles from "./site.module.css";

export default function SiteFooter() {
  const { header, footer } = useContent().site;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>cinapi</div>
            <p className={styles.footerTagline}>{footer.tagline}</p>
          </div>

          <div>
            <div className={styles.footerColLabel}>{footer.menuLabel}</div>
            <div className={styles.footerLinks}>
              <Link href="/products">{header.products}</Link>
              <Link href="/contact">{header.contact}</Link>
              <Link href="/company">{header.company}</Link>
            </div>
          </div>

          <div>
            <div className={styles.footerColLabel}>{footer.contactLabel}</div>
            <div className={styles.footerText}>
              <div>{footer.email}</div>
            </div>
            <div className={`${styles.footerColLabel} ${styles.footerColLabelSpaced}`}>
              {footer.addressLabel}
            </div>
            <div className={styles.footerText}>
              <div className={styles.footerAddress}>{footer.address}</div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopy}>{footer.rights}</div>
      </div>
    </footer>
  );
}
