"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import { useSectionSnap } from "@/components/site/useSectionSnap";
import shared from "@/components/site/site.module.css";
import styles from "./story.module.css";

export default function StoryPage() {
  const { story } = useContent().site;

  // Meeting revision (item 6) — see useSectionSnap. Company's sections vary a lot in
  // height (a 100vh hero, several auto-height narrative bands, a 92vh direction
  // band), which is exactly the short/tall split the hook measures per section.
  const mainRef = useRef<HTMLElement>(null);
  useSectionSnap(mainRef);

  return (
    <SiteChrome>
      <main ref={mainRef}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image src="/brand/brand-landscape.png" alt="" fill priority sizes="100vw" className={styles.heroImg} />
            <div className={styles.heroGradient} />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroKickerRow}>
              <span className={styles.heroKicker}>{story.kicker}</span>
              {/* Decorative rule removed per the latest design; OUR STORY label stays. */}
            </div>
            <h1 className={styles.heroTitle}>{story.heroTitle}</h1>
            <p className={styles.heroSub}>{story.heroSub}</p>
          </div>
        </section>

        {/* The question */}
        <section className={styles.question}>
          <div data-reveal className={`${shared.reveal} ${styles.questionInner}`}>
            <div className={styles.questionKicker}>{story.questionKicker}</div>
            <p className={styles.questionBody}>{story.questionBody}</p>
            <div className={styles.questionBar} />
            <p className={styles.questionQuote}>{story.questionQuote}</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className={styles.philosophy}>
          <div className={styles.twoCol}>
            <div className={styles.philoImgWrap}>
              <Image src="/brand/brand-pile.png" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.philoImg} />
              <div className={styles.philoImgGradient} />
            </div>
            <div data-reveal className={`${shared.reveal} ${styles.philoCopy}`}>
              <div className={styles.philoKicker}>{story.philoKicker}</div>
              <h2 className={styles.philoTitle}>{story.philoTitle}</h2>
              <p className={styles.philoBody}>{story.philoBody}</p>
              <div className={styles.philoTerm}>
                <div className={styles.philoTermLabel}>{story.philoTermLabel}</div>
                <p className={styles.philoTermBody}>{story.philoTermBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three attitudes */}
        <section className={styles.attitudes}>
          <div className={styles.attitudesInner}>
            <div data-reveal className={`${shared.reveal} ${styles.attitudesHead}`}>
              <div className={styles.attitudeKicker}>{story.attitudeKicker}</div>
              <h2 className={styles.attitudeTitle}>{story.attitudeTitle}</h2>
            </div>
            <div className={styles.attitudeGrid}>
              {story.attitudes.map((a, i) => (
                <div key={a.num} data-reveal className={`${shared.reveal} ${styles.attitudeCell}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.attitudeNum}>{a.num}</div>
                  <div className={styles.attitudeCellTitle}>{a.title}</div>
                  <p className={styles.attitudeCellBody}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className={styles.direction}>
          <div className={styles.dirBg}>
            <Image src="/brand/brand-dome.png" alt="" fill sizes="100vw" className={styles.dirImg} />
            <div className={styles.dirGradient} />
          </div>
          <div data-reveal className={`${shared.reveal} ${styles.dirInner}`}>
            <div className={styles.dirKicker}>{story.directionKicker}</div>
            <h2 className={styles.dirTitle}>{story.directionTitle}</h2>
            <p className={styles.dirBody}>{story.directionBody}</p>
            <p className={styles.dirClose}>{story.directionClose}</p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div data-reveal className={`${shared.reveal} ${styles.ctaBox}`}>
            <div className={styles.ctaText}>{story.ctaText}</div>
            <Link href="/products" className={styles.ctaButton}>
              {story.ctaButton} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
