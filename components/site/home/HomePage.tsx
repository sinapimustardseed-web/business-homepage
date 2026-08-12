"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import SiteChrome from "@/components/site/SiteChrome";
import FlowButton from "@/components/site/FlowButton";
import shared from "@/components/site/site.module.css";
import styles from "./home.module.css";

export default function HomePage() {
  const { home } = useContent().site;
  const { hero, scrollHint, question, philosophy, products, contact } = home;
  const { xpile, airdome } = products;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Local-state only — the form intentionally sends nothing to a backend.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteChrome>
      <main>
        {/* S1 — hero */}
        <section className={styles.hero}>
          {/* Latest design: the headline sits above the artwork and the English
              eyebrow is not rendered. hero.eyebrow is kept in the content files. */}
          <p className={styles.heroLine}>{hero.line}</p>
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
          <div className={styles.scrollCue} aria-hidden="true">
            {scrollHint}
            <span className={styles.scrollCueLine} />
          </div>
        </section>

        {/* S2 — the question */}
        <section className={styles.section}>
          <div className={styles.qInner}>
            <div data-reveal className={`${shared.reveal} ${styles.eyebrow} ${styles.qEyebrow}`}>
              {question.eyebrow}
            </div>
            <h2 data-reveal className={`${shared.reveal} ${styles.qTitle}`} style={{ transitionDelay: "0.08s" }}>
              {question.title}
            </h2>
            <div data-reveal className={`${shared.reveal} ${styles.qQuoteWrap}`} style={{ transitionDelay: "0.16s" }}>
              <p className={styles.qQuote}>
                <span className={styles.qMark}>“</span>
                {question.quote}
                <span className={styles.qMark}>”</span>
              </p>
            </div>
            <p data-reveal className={`${shared.reveal} ${styles.qBody}`} style={{ transitionDelay: "0.24s" }}>
              {question.body}
            </p>
          </div>
        </section>

        {/* S3 — philosophy (dark) */}
        <section className={styles.philosophy}>
          <div className={styles.phInner}>
            <div data-reveal className={`${shared.reveal} ${styles.phEyebrow}`}>
              {philosophy.eyebrow}
            </div>
            <h2 data-reveal className={`${shared.reveal} ${styles.phHeadline}`} style={{ transitionDelay: "0.08s" }}>
              {philosophy.headline}
            </h2>
            <p data-reveal className={`${shared.reveal} ${styles.phLead}`} style={{ transitionDelay: "0.16s" }}>
              {philosophy.lead}
            </p>
            <div data-reveal className={`${shared.reveal} ${styles.phLinkWrap}`} style={{ transitionDelay: "0.24s" }}>
              <FlowButton href="/company" dark>{philosophy.link}</FlowButton>
            </div>
          </div>
        </section>

        {/* S4 — products */}
        <section className={styles.section}>
          <div className={styles.prodInner}>
            <div className={styles.prodHeader}>
              <div data-reveal className={`${shared.reveal} ${styles.eyebrow} ${styles.prodEyebrow}`}>
                {products.eyebrow}
              </div>
              <h2 data-reveal className={`${shared.reveal} ${styles.prodTitle}`} style={{ transitionDelay: "0.08s" }}>
                {products.title}
              </h2>
            </div>

            <div className={`${styles.prodRow} ${styles.prodRowSpaced}`}>
              <div data-reveal className={shared.reveal}>
                <div className={styles.prodIndex}>01 &nbsp;/&nbsp; X-PILE</div>
                <h3 className={styles.prodH3}>{xpile.title}</h3>
                <p className={styles.prodDesc}>{xpile.description}</p>
                <FlowButton href={xpile.href}>{xpile.cta}</FlowButton>
              </div>
              <div className={styles.prodMedia}>
                {/* Decorative overlay label removed per the latest design; the
                    xpile.eyebrow content key is intentionally kept. */}
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

            <div className={styles.prodRow}>
              <div className={styles.prodMedia}>
                {/* Decorative overlay label removed per the latest design; the
                    airdome.eyebrow content key is intentionally kept. */}
                <Image
                  src="/products/product-airdome.png"
                  alt="AIRDOME"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 900px) 90vw, 45vw"
                  className={`${styles.prodImg} ${styles.shadowDome}`}
                />
              </div>
              <div data-reveal className={shared.reveal} style={{ transitionDelay: "0.1s" }}>
                <div className={styles.prodIndex}>02 &nbsp;/&nbsp; AIRDOME</div>
                <h3 className={styles.prodH3}>{airdome.title}</h3>
                <p className={styles.prodDesc}>{airdome.description}</p>
                <FlowButton href={airdome.href}>{airdome.cta}</FlowButton>
              </div>
            </div>
          </div>
        </section>

        {/* S5 — contact */}
        <section className={styles.section}>
          <div className={styles.contactInner}>
            <div className={styles.contactHeader}>
              <div data-reveal className={`${shared.reveal} ${styles.eyebrow} ${styles.contactEyebrow}`}>
                {contact.eyebrow}
              </div>
              <h2 data-reveal className={`${shared.reveal} ${styles.contactTitle}`} style={{ transitionDelay: "0.06s" }}>
                {contact.title}
              </h2>
              <p data-reveal className={`${shared.reveal} ${styles.contactSub}`} style={{ transitionDelay: "0.12s" }}>
                {contact.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className={styles.thanks}>
                <div className={styles.thanksTitle}>{contact.thanksTitle}</div>
                <p className={styles.thanksBody}>{contact.thanksBody}</p>
              </div>
            ) : (
              <form data-reveal className={`${shared.reveal} ${styles.form}`} style={{ transitionDelay: "0.18s" }} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div>
                    <label className={styles.fieldLabel} htmlFor="home-name">{contact.labels.name}</label>
                    <input id="home-name" className={styles.input} type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={contact.placeholders.name} />
                  </div>
                  <div>
                    <label className={styles.fieldLabel} htmlFor="home-phone">{contact.labels.phone}</label>
                    <input id="home-phone" className={styles.input} type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={contact.placeholders.phone} />
                  </div>
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="home-email">{contact.labels.email}</label>
                  <input id="home-email" className={styles.input} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={contact.placeholders.email} />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="home-message">{contact.labels.message}</label>
                  <textarea id="home-message" className={styles.textarea} required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={contact.placeholders.message} />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  {contact.submit} <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
