"use client";

import { useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function QuestionSection() {
  const { question } = useContent().productBriefing;

  return (
    <section className={styles.section}>
      <div className={styles.qInner}>
        <div data-reveal className={`${styles.reveal} ${styles.eyebrow} ${styles.qEyebrow}`}>
          {question.eyebrow}
        </div>
        <h2 data-reveal className={`${styles.reveal} ${styles.qTitle}`} style={{ transitionDelay: "0.08s" }}>
          {question.title}
        </h2>
        <div
          data-reveal
          className={`${styles.reveal} ${styles.qQuoteWrap}`}
          style={{ transitionDelay: "0.16s" }}
        >
          <p className={styles.qQuote}>
            <span className={styles.qMark}>“</span>
            {question.quote}
            <span className={styles.qMark}>”</span>
          </p>
        </div>
        <p data-reveal className={`${styles.reveal} ${styles.qBody}`} style={{ transitionDelay: "0.24s" }}>
          {question.body}
        </p>
      </div>
    </section>
  );
}
