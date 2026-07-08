"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

export default function CompanyStoryPreview() {
  const { companyStory } = useContent();

  return (
    <section className="bg-cinapi-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
          {companyStory.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          <div className="rounded-2xl border border-cinapi-green/15 bg-cinapi-olive/[0.05] p-8 lg:p-10">
            <h3 className="text-lg font-semibold text-cinapi-green">{companyStory.seedTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cinapi-olive">{companyStory.seedText}</p>
          </div>
          <div className="rounded-2xl border border-cinapi-gold/40 bg-cinapi-gold/[0.06] p-8 lg:p-10">
            <h3 className="text-lg font-semibold text-cinapi-green">{companyStory.shieldTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cinapi-olive">{companyStory.shieldText}</p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/company"
            className="inline-flex items-center gap-1 text-sm font-semibold text-cinapi-gold"
          >
            {companyStory.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
