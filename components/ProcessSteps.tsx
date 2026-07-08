"use client";

import { useContent } from "@/context/LanguageContext";

export default function ProcessSteps() {
  const { process } = useContent();

  return (
    <section className="bg-cinapi-green/[0.04]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <h2 className="text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
          {process.heading}
        </h2>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {process.steps.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-cinapi-green/15 bg-cinapi-ivory p-6 transition hover:border-cinapi-gold/40 lg:p-7"
            >
              <span className="text-sm font-bold text-cinapi-gold">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold text-cinapi-green">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cinapi-olive">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
