"use client";

import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function ProductsSection() {
  const { products } = useContent().productBriefing;
  const { xpile, airdome } = products;

  return (
    <section className={styles.section}>
      <div className={styles.prodInner}>
        <div className={styles.prodHeader}>
          <div data-reveal className={`${styles.reveal} ${styles.eyebrow} ${styles.prodEyebrow}`}>
            {products.eyebrow}
          </div>
          <h2 data-reveal className={`${styles.reveal} ${styles.prodTitle}`} style={{ transitionDelay: "0.08s" }}>
            {products.title}
          </h2>
        </div>

        {/* Row 1 — X-PILE: copy | media */}
        <div className={`${styles.prodRow} ${styles.prodRowSpaced}`}>
          <div data-reveal className={styles.reveal}>
            <div className={styles.prodIndex}>01 &nbsp;/&nbsp; X-PILE</div>
            <h3 className={styles.prodH3}>{xpile.title}</h3>
            <p className={styles.prodDesc}>{xpile.description}</p>
            <Link href={xpile.href} className={`${styles.prodCta} ${styles.arrowBtn}`}>
              {xpile.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className={styles.prodMedia}>
            <span className={styles.prodMediaLabel}>{xpile.eyebrow}</span>
            <Image
              src="/products/product-xpile.png"
              alt="X-PILE"
              width={1024}
              height={1024}
              sizes="(max-width: 900px) 90vw, 45vw"
              className={`${styles.prodImg} ${styles.shadowXpile}`}
            />
          </div>
        </div>

        {/* Row 2 — AIR DOME: media | copy */}
        <div className={styles.prodRow}>
          <div className={styles.prodMedia}>
            <span className={styles.prodMediaLabel}>{airdome.eyebrow}</span>
            <Image
              src="/products/product-airdome.png"
              alt="AIR DOME"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 90vw, 45vw"
              className={`${styles.prodImg} ${styles.shadowDome}`}
            />
          </div>
          <div data-reveal className={styles.reveal} style={{ transitionDelay: "0.1s" }}>
            <div className={styles.prodIndex}>02 &nbsp;/&nbsp; AIR DOME</div>
            <h3 className={styles.prodH3}>{airdome.title}</h3>
            <p className={styles.prodDesc}>{airdome.description}</p>
            <Link href={airdome.href} className={`${styles.prodCta} ${styles.arrowBtn}`}>
              {airdome.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
