"use client";

import type { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import { useContent } from "@/context/LanguageContext";

const inputClasses =
  "w-full rounded-md border border-cinapi-green/20 bg-white/60 px-4 py-2.5 text-sm text-cinapi-green placeholder:text-cinapi-green/30 focus:border-cinapi-gold focus:outline-none focus:ring-1 focus:ring-cinapi-gold";

export default function ContactPage() {
  const { contactPage } = useContent();
  const { form } = contactPage;

  // TODO: wire this up to a real submission handler once a backend/email
  // notification service (e.g. an API route calling Resend/SendGrid) exists.
  // For now the form is static and does not send data anywhere.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageIntro title={contactPage.headline} subtitle={contactPage.subcopy} />

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-cinapi-green">
                  {form.company}
                  <input type="text" name="company" required className={`mt-2 ${inputClasses}`} />
                </label>
                <label className="block text-sm font-medium text-cinapi-green">
                  {form.contactName}
                  <input type="text" name="contactName" required className={`mt-2 ${inputClasses}`} />
                </label>
                <label className="block text-sm font-medium text-cinapi-green">
                  {form.email}
                  <input type="email" name="email" required className={`mt-2 ${inputClasses}`} />
                </label>
                <label className="block text-sm font-medium text-cinapi-green">
                  {form.phone}{" "}
                  <span className="font-normal text-cinapi-green/50">{form.optionalTag}</span>
                  <input type="tel" name="phone" className={`mt-2 ${inputClasses}`} />
                </label>
              </div>

              <label className="block text-sm font-medium text-cinapi-green">
                {form.inquiryType}
                <select name="inquiryType" required className={`mt-2 ${inputClasses}`} defaultValue="">
                  <option value="" disabled>
                    —
                  </option>
                  {form.inquiryTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium text-cinapi-green">
                {form.message}
                <textarea name="message" required rows={5} className={`mt-2 ${inputClasses}`} />
              </label>

              <label className="block text-sm font-medium text-cinapi-green">
                {form.attachment}
                <input type="file" name="attachment" disabled className={`mt-2 ${inputClasses} opacity-60`} />
                <span className="mt-1 block text-xs font-normal text-cinapi-green/50">
                  {form.attachmentNote}
                </span>
              </label>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-cinapi-green px-8 py-3 text-sm font-semibold text-cinapi-ivory shadow-sm transition hover:bg-cinapi-olive"
                >
                  {form.submit}
                </button>
                <p className="mt-3 text-xs text-cinapi-green/50">{form.submitNote}</p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
