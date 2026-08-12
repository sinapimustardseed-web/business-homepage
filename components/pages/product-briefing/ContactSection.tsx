"use client";

import { useState, type FormEvent } from "react";
import { useContent } from "@/context/LanguageContext";
import styles from "./ProductBriefing.module.css";

export default function ContactSection() {
  const { contact } = useContent().productBriefing;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.contactInner}>
        <div className={styles.contactHeader}>
          <div data-reveal className={`${styles.reveal} ${styles.eyebrow} ${styles.contactEyebrow}`}>
            {contact.eyebrow}
          </div>
          <h2 data-reveal className={`${styles.reveal} ${styles.contactTitle}`} style={{ transitionDelay: "0.06s" }}>
            {contact.title}
          </h2>
          <p data-reveal className={`${styles.reveal} ${styles.contactSub}`} style={{ transitionDelay: "0.12s" }}>
            {contact.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className={styles.thanks}>
            <div className={styles.thanksTitle}>{contact.thanksTitle}</div>
            <p className={styles.thanksBody}>{contact.thanksBody}</p>
          </div>
        ) : (
          <form
            data-reveal
            className={`${styles.reveal} ${styles.form}`}
            style={{ transitionDelay: "0.18s" }}
            onSubmit={handleSubmit}
          >
            <div className={styles.formRow}>
              <div>
                <label className={styles.fieldLabel} htmlFor="pb-name">
                  {contact.labels.name}
                </label>
                <input
                  id="pb-name"
                  className={styles.input}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={contact.placeholders.name}
                />
              </div>
              <div>
                <label className={styles.fieldLabel} htmlFor="pb-phone">
                  {contact.labels.phone}
                </label>
                <input
                  id="pb-phone"
                  className={styles.input}
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={contact.placeholders.phone}
                />
              </div>
            </div>
            <div>
              <label className={styles.fieldLabel} htmlFor="pb-email">
                {contact.labels.email}
              </label>
              <input
                id="pb-email"
                className={styles.input}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={contact.placeholders.email}
              />
            </div>
            <div>
              <label className={styles.fieldLabel} htmlFor="pb-message">
                {contact.labels.message}
              </label>
              <textarea
                id="pb-message"
                className={styles.textarea}
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={contact.placeholders.message}
              />
            </div>
            <button type="submit" className={`${styles.submitBtn} ${styles.arrowBtn}`}>
              {contact.submit} <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
