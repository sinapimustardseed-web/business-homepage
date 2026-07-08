"use client";

import { useContent } from "@/context/LanguageContext";

export default function Credibility() {
  const { credibility } = useContent();

  return (
    <section className="relative overflow-hidden bg-cinapi-green text-cinapi-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,240,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,229,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cinapi-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <span className="block h-px w-12 bg-cinapi-gold" aria-hidden="true" />
        <h2 className="mt-6 break-keep text-3xl font-bold tracking-tight sm:text-4xl">
          {credibility.heading}
        </h2>

        <div className="mt-12 grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-10">
          {credibility.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-cinapi-ivory/15 pt-5 sm:border-t-0 sm:border-l-2 sm:border-cinapi-gold sm:pl-5 sm:pt-0"
            >
              <div className="text-4xl font-bold tracking-tight text-cinapi-gold sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-cinapi-ivory/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-cinapi-ivory/15 pt-6 text-sm text-cinapi-ivory/60">
          {credibility.placeholderNote}
        </p>
      </div>
    </section>
  );
}
