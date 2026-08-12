"use client";

import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import FlowButton from "@/components/site/FlowButton";
import styles from "./productsIntro.module.css";

export default function ProductsIntroPage() {
  const { productsIntro } = useContent().site;
  const { xpile, airdome } = productsIntro;

  return (
    <SiteChrome>
      <main>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.watermark} aria-hidden="true">
            cinapi
          </div>
          <div className={styles.introInner}>
            <div className={styles.kicker}>{productsIntro.kicker}</div>
            <h1 className={styles.title}>{productsIntro.title}</h1>
            <div className={styles.bar} />
            <p className={styles.body}>{productsIntro.body}</p>
          </div>
        </section>

        {/* Products — heading row + two inset banner cards */}
        <section className={styles.products}>
          <div className={styles.headingRow}>
            <h2 className={styles.productsLabel}>{productsIntro.productsLabel}</h2>
            <Link href="/contact" className={styles.getInTouch}>
              {productsIntro.getInTouch} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.bandStack}>
            {/* X-PILE banner */}
            <Link href={xpile.href} className={styles.band} data-flow-hover>
              <Image
                src="/products/product-xpile.png"
                alt="X-PILE"
                width={1024}
                height={1024}
                sizes="(max-width: 700px) 100vw, 45vw"
                className={`${styles.bandImg} ${styles.imgXpile}`}
              />
              {/* The pill/eyebrow labels were dropped per the latest design; the
                  content keys are intentionally kept. */}
              <div className={`${styles.scrim} ${styles.scrimXpile}`} aria-hidden="true" />
              <div className={styles.bandHover} aria-hidden="true" />
              <div className={styles.bandInner}>
                <div className={`${styles.bandCopy} ${styles.copyXpile}`}>
                  <h3 className={styles.wordmark}>X-PILE</h3>
                  <p className={styles.teaser}>{xpile.teaser}</p>
                  <FlowButton hoverFromParent>{productsIntro.readMore}</FlowButton>
                </div>
              </div>
            </Link>

            {/* AIRDOME banner */}
            <Link href={airdome.href} className={styles.band} data-flow-hover>
              <Image
                src="/products/product-airdome.png"
                alt="AIRDOME"
                width={1536}
                height={1024}
                sizes="(max-width: 700px) 100vw, 60vw"
                className={`${styles.bandImg} ${styles.imgDome}`}
              />
              <div className={`${styles.scrim} ${styles.scrimDome}`} aria-hidden="true" />
              <div className={styles.bandHover} aria-hidden="true" />
              <div className={styles.bandInner}>
                <div className={`${styles.bandCopy} ${styles.copyDome}`}>
                  <h3 className={styles.wordmark}>AIRDOME</h3>
                  <p className={styles.teaser}>{airdome.teaser}</p>
                  <FlowButton hoverFromParent>{productsIntro.readMore}</FlowButton>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
