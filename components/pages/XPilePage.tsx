"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import InlineContactCta from "@/components/InlineContactCta";
import { useContent } from "@/context/LanguageContext";

export default function XPilePage() {
  const { xpilePage } = useContent();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageIntro eyebrow="X-PILE" title={xpilePage.headline} subtitle={xpilePage.subcopy} />

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-cinapi-gold">
              {xpilePage.definitionLabel}
            </span>
            <p className="mt-3 max-w-2xl break-keep text-xl leading-relaxed text-cinapi-green">
              {xpilePage.definition}
            </p>
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-cinapi-green sm:text-3xl">
              {xpilePage.featuresHeading}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {xpilePage.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-cinapi-green/12 bg-cinapi-ivory p-6 text-sm font-medium text-cinapi-green"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-cinapi-green sm:text-3xl">
              {xpilePage.applicationsHeading}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {xpilePage.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-full border border-cinapi-gold/40 bg-cinapi-gold/[0.08] px-5 py-2 text-sm font-medium text-cinapi-green"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-6 md:grid-cols-3">
              <PlaceholderBlock {...xpilePage.specSection} />
              <PlaceholderBlock {...xpilePage.caseStudySection} />
              <PlaceholderBlock {...xpilePage.gallerySection} />
            </div>
          </div>
        </section>

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <InlineContactCta {...xpilePage.contactCta} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
