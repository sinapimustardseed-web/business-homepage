"use client";

import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import styles from "./blog.module.css";

export default function BlogPage() {
  const { blog } = useContent().site;

  return (
    <SiteChrome>
      <main>
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <div className={styles.kickerRow}>
              {/* Decorative rule removed per the latest design; BLOG label stays. */}
              <span className={styles.kicker}>{blog.kicker}</span>
            </div>
            <h1 className={styles.title}>{blog.heroTitle}</h1>
            <p className={styles.body}>{blog.heroBody}</p>
          </div>
        </section>

        <section className={styles.posts}>
          <div className={styles.grid}>
            {blog.posts.map((p, i) => (
              <article key={i} className={styles.card}>
                <div className={styles.cardImg} aria-hidden="true">
                  {p.imgPlaceholder}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardDate}>{p.date}</div>
                  <div className={styles.cardTitle}>{p.title}</div>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.emptyNote}>{blog.emptyNote}</p>
        </section>
      </main>
    </SiteChrome>
  );
}
