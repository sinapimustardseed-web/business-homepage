"use client";

import { Fragment, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import StatCounter from "@/components/site/StatCounter";
import FlowButton from "@/components/site/FlowButton";
import { useSectionSnap } from "@/components/site/useSectionSnap";
import ApplicationsRail from "./ApplicationsRail";
import shared from "@/components/site/site.module.css";
import styles from "./productPage.module.css";

const BRAND = "X-PILE";

/** Marks a line break that only applies on desktop — see `withDesktopBreaks`. */
const DESKTOP_BREAK = "[[br]]";

/**
 * Confirmed corrections (a -> b): 희원 asked for specific desktop break positions in
 * the AIR DOME hero paragraph and, separately, that the current mobile version stay
 * exactly as it is. The copy carries those positions as DESKTOP_BREAK markers; each
 * becomes a <br> that `shared.desktopBreak` removes below the site's single 900px
 * breakpoint, so mobile keeps wrapping naturally. Strings without a marker are
 * returned unchanged, so English and X-PILE are untouched.
 */
function withDesktopBreaks(text: string): ReactNode[] {
  return text.split(DESKTOP_BREAK).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br className={shared.desktopBreak} />}
      {part}
    </Fragment>
  ));
}

/**
 * Renders a sentence with the "X-PILE" brand token in a nowrap span. Browsers may
 * break after the hyphen, splitting the name as "X-" / "PILE" (observed at
 * 360–400px on the results lead-in). The rest of the sentence still wraps normally,
 * and the trailing "’s" stays attached since there is no break opportunity there.
 */
function withUnbreakableBrand(text: string): ReactNode[] {
  return text.split(BRAND).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <span className={styles.brandToken}>{BRAND}</span>}
      {part}
    </Fragment>
  ));
}

export default function ProductPage({ variant }: { variant: "xpile" | "airdome" }) {
  const content = useContent().site[variant];
  const heroImage = variant === "xpile" ? "/products/xpile-hero.png" : "/products/product-airdome.png";
  const ctaHref = variant === "xpile" ? "/products/airdome" : "/products/x-pile";
  const appCount = `01 – ${String(content.apps.length).padStart(2, "0")}`;

  // Meeting revision (item 6). <main>'s direct children are the snap sections, and
  // ApplicationsRail's root IS one of them — so its 320vh pin is stepped through
  // rather than jumped over, and the rail keeps its scroll-driven progression.
  const mainRef = useRef<HTMLElement>(null);
  useSectionSnap(mainRef, variant);

  return (
    <SiteChrome>
      <main ref={mainRef}>
        {/* Hero */}
        <section className={`${styles.hero} ${variant === "airdome" ? styles.heroDomeBg : ""}`}>
          {variant === "xpile" ? (
            <>
              <div className={styles.heroImgXpile}>
                <Image src={heroImage} alt={content.heading} fill priority sizes="100vw" />
              </div>
              <div className={styles.heroOverlayXpile} />
            </>
          ) : (
            <>
              <div className={styles.heroDomeMedia} aria-hidden="true">
                <Image
                  src={heroImage}
                  alt={content.heading}
                  width={1536}
                  height={1024}
                  priority
                  sizes="60vw"
                  className={styles.heroDomeImg}
                />
              </div>
              <div className={styles.heroOverlayDome} />
            </>
          )}
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              {/* Decorative "모델" label removed per the latest design (both product
                  heroes); the modelLabel content key is intentionally kept. */}
              <h1 className={styles.heroTitle}>{content.heading}</h1>
              <p className={styles.heroDesc}>{withDesktopBreaks(content.desc)}</p>
              <FlowButton href="/contact">{content.cta}</FlowButton>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <div className={styles.blockHead}>
              <div className={styles.lead}>{content.whyLead}</div>
              <div className={styles.blockTitle}>{content.whyTitle}</div>
            </div>
            <div className={`${styles.featuresGrid} ${variant === "airdome" ? styles.featuresGrid3 : ""}`}>
              {content.features.map((f, i) => (
                <div
                  key={f.n}
                  data-reveal
                  className={`${shared.featureReveal} ${styles.featureCard}`}
                  style={{ transitionDelay: `${0.05 + i * 0.13}s` }}
                >
                  {/* Number and title share one baseline row; the rule sits under it. */}
                  <div className={styles.featureHead}>
                    <span className={styles.featureNum}>{f.n}</span>
                    <span className={styles.featureTitle}>{f.title}</span>
                  </div>
                  <div className={styles.featureBody}>{f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.block}>
          <div className={styles.blockInner}>
            <div className={`${styles.blockHead} ${styles.blockHeadWide}`}>
              <div className={styles.lead}>{withUnbreakableBrand(content.effectLead)}</div>
              <div className={styles.blockTitle}>{content.effectTitle}</div>
            </div>
            {/* Keyed by index, not by label: labels are translated, so keying on
                them remounts these nodes on a language switch and the new nodes
                lose their data-revealed state — leaving the stats at opacity: 0. */}
            <div className={styles.statsGrid}>
              {content.stats.map((s, i) => (
                <div
                  key={i}
                  data-reveal
                  className={`${shared.statCol} ${styles.statItem}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.statNumRow}>
                    <StatCounter target={s.target} delay={i * 120} className={styles.statNum} />
                    <span className={styles.statSuffix}>{s.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications — pinned rail + idle autoplay + manual drag */}
        <ApplicationsRail
          apps={content.apps}
          label={content.applicationsLabel}
          title={content.applicationsTitle}
          count={appCount}
        />

        {/* CTA banner */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>{content.ctaBannerText}</div>
            <Link href={ctaHref} className={styles.ctaBtn}>
              {content.ctaButtonLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
