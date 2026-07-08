"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import InlineContactCta from "@/components/InlineContactCta";
import { useContent } from "@/context/LanguageContext";

export default function AirDomePage() {
  const { airdomePage } = useContent();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageIntro eyebrow="AirDome" title={airdomePage.headline} subtitle={airdomePage.subcopy} />

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-cinapi-gold">
              {airdomePage.definitionLabel}
            </span>
            <p className="mt-3 max-w-2xl break-keep text-xl leading-relaxed text-cinapi-green">
              {airdomePage.definition}
            </p>
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-cinapi-green sm:text-3xl">
              {airdomePage.featuresHeading}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {airdomePage.features.map((feature) => (
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
            <PlaceholderBlock {...airdomePage.gallerySection} />
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <InlineContactCta {...airdomePage.contactCta} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
