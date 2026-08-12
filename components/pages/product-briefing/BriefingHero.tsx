"use client";

import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function BriefingHero() {
  const { hero, scrollHint } = useContent().productBriefing;

  return (
    <section className={styles.hero}>
      <div className={styles.heroEyebrow}>{hero.eyebrow}</div>

      <div className={styles.heroFigure}>
        <div className={styles.heroShadow} aria-hidden="true" />
        <Image
          src="/brand/cinapi-balloon-crop.png"
          alt="cinapi"
          width={1162}
          height={417}
          priority
          sizes="(max-width: 1120px) 86vw, 1120px"
          className={styles.heroImg}
        />
      </div>

      <p className={styles.heroLine}>{hero.line}</p>

      <div className={styles.scrollCue} aria-hidden="true">
        {scrollHint}
        <span className={styles.scrollCueLine} />
      </div>
    </section>
  );
}
