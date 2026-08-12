"use client";

import { useRef } from "react";
import styles from "./product-briefing/ProductBriefing.module.css";
import BriefingHeader from "./product-briefing/BriefingHeader";
import BriefingHero from "./product-briefing/BriefingHero";
import QuestionSection from "./product-briefing/QuestionSection";
import PhilosophySection from "./product-briefing/PhilosophySection";
import ProductsSection from "./product-briefing/ProductsSection";
import ContactSection from "./product-briefing/ContactSection";
import BriefingFooter from "./product-briefing/BriefingFooter";
import { useReveal } from "./product-briefing/useReveal";

export default function ProductBriefingPage({ fontClass }: { fontClass: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef} className={`${fontClass} ${styles.pageRoot}`}>
      <BriefingHeader />
      <main>
        <BriefingHero />
        <QuestionSection />
        <PhilosophySection />
        <ProductsSection />
        <ContactSection />
      </main>
      <BriefingFooter />
      <div className={styles.grain} aria-hidden="true" />
    </div>
  );
}
