"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { useContent } from "@/context/LanguageContext";

export default function CompanyPage() {
  const { companyPage } = useContent();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageIntro title={companyPage.headline} subtitle={companyPage.subcopy} />

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-cinapi-green/15 bg-cinapi-olive/[0.05] p-8 lg:p-10">
                <h2 className="text-lg font-semibold text-cinapi-green">{companyPage.meaningHeading}</h2>
                <p className="mt-3 break-keep text-xl font-semibold text-cinapi-gold">
                  {companyPage.meaningText}
                </p>
              </div>
              <div className="rounded-2xl border border-cinapi-gold/40 bg-cinapi-gold/[0.06] p-8 lg:p-10">
                <h2 className="text-lg font-semibold text-cinapi-green">{companyPage.missionHeading}</h2>
                <p className="mt-3 break-keep text-sm leading-relaxed text-cinapi-olive">
                  {companyPage.missionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <PlaceholderBlock {...companyPage.foundingSection} />
              <PlaceholderBlock {...companyPage.fieldExperienceSection} />
              <PlaceholderBlock {...companyPage.unExperienceSection} />
              <div className="flex items-center justify-center rounded-2xl border border-dashed border-cinapi-green/25 bg-cinapi-green/[0.03] p-8 text-center text-sm text-cinapi-green/50">
                {companyPage.imagePlaceholderNote}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6">
            <Link
              href="/company/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cinapi-gold"
            >
              {companyPage.blogLinkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
