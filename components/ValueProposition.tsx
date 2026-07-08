"use client";

import { useContent } from "@/context/LanguageContext";

export default function ValueProposition() {
  const { valueProposition } = useContent();

  return (
    <section className="bg-cinapi-green/[0.04]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <h2 className="text-center text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
          {valueProposition.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          <div className="rounded-2xl border border-cinapi-green/15 bg-cinapi-ivory p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-cinapi-olive">
              {valueProposition.problemLabel}
            </span>
            <p className="mt-4 text-base leading-relaxed text-cinapi-green">{valueProposition.problem}</p>
          </div>
          <div className="rounded-2xl border border-cinapi-green/15 bg-cinapi-ivory p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-cinapi-olive">
              {valueProposition.solutionLabel}
            </span>
            <p className="mt-4 text-base leading-relaxed text-cinapi-green">{valueProposition.solution}</p>
          </div>
          <div className="rounded-2xl border border-cinapi-gold/40 bg-cinapi-ivory p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-cinapi-olive">
              {valueProposition.effectLabel}
            </span>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {valueProposition.effects.map((effect) => (
                <div key={effect.label}>
                  <dt className="text-2xl font-bold text-cinapi-gold">{effect.value}</dt>
                  <dd className="text-xs text-cinapi-green/70">{effect.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-8 text-center text-sm italic text-cinapi-green/60">{valueProposition.note}</p>
      </div>
    </section>
  );
}
