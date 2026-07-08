"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

export default function ContactCta() {
  const { contactCta } = useContent();

  return (
    <section className="bg-cinapi-olive">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-cinapi-ivory sm:text-4xl">
          {contactCta.heading}
        </h2>
        <p className="mt-4 text-base text-cinapi-ivory/80">{contactCta.subheading}</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-cinapi-gold px-8 py-3 text-sm font-semibold text-cinapi-green transition hover:brightness-95"
        >
          {contactCta.button}
        </Link>
      </div>
    </section>
  );
}
