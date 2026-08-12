"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function PhilosophySection() {
  const { philosophy } = useContent().productBriefing;

  return (
    <section className={styles.philosophy}>
      <div className={styles.phInner}>
        <div data-reveal className={`${styles.reveal} ${styles.phEyebrow}`}>
          {philosophy.eyebrow}
        </div>
        <h2 data-reveal className={`${styles.reveal} ${styles.phHeadline}`} style={{ transitionDelay: "0.08s" }}>
          {philosophy.headline}
        </h2>
        <p data-reveal className={`${styles.reveal} ${styles.phLead}`} style={{ transitionDelay: "0.16s" }}>
          {philosophy.lead}
        </p>
        <div data-reveal className={`${styles.reveal} ${styles.phLinkWrap}`} style={{ transitionDelay: "0.24s" }}>
          <Link href="/company" className={`${styles.phLink} ${styles.arrowBtn}`}>
            {philosophy.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
