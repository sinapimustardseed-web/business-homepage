"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

function XPileIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
      <line x1="24" y1="4" x2="24" y2="32" stroke="#35482e" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 32 L17 44 M24 32 L31 44" stroke="#35482e" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="44" x2="40" y2="44" stroke="#bb9e60" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function AirDomeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 40 C6 22 14 10 24 10 C34 10 42 22 42 40"
        stroke="#35482e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="6" y1="40" x2="42" y2="40" stroke="#bb9e60" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductTeaser() {
  const { productTeaser } = useContent();
  const cards = [
    { ...productTeaser.xpile, icon: <XPileIcon /> },
    { ...productTeaser.airdome, icon: <AirDomeIcon /> },
  ];

  return (
    <section className="bg-cinapi-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="break-keep text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
            {productTeaser.heading}
          </h2>
          <p className="mt-4 break-keep text-base text-cinapi-olive">{productTeaser.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {cards.map((card, index) => (
            <Link
              key={card.name}
              href="/products"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-cinapi-green/12 bg-gradient-to-b from-white/70 to-white/30 shadow-sm ring-1 ring-cinapi-green/[0.03] transition hover:-translate-y-1 hover:border-cinapi-gold hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cinapi-gold to-cinapi-olive" />

              <div className="flex items-center justify-between px-8 pt-9 lg:px-10 lg:pt-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cinapi-green/[0.06] ring-1 ring-cinapi-green/10">
                  {card.icon}
                </div>
                <span className="text-sm font-semibold text-cinapi-green/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col px-8 pb-9 pt-6 lg:px-10 lg:pb-10">
                <h3 className="text-2xl font-semibold tracking-tight text-cinapi-green lg:text-[28px]">
                  {card.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cinapi-olive">{card.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 border-t border-cinapi-green/10 pt-5 text-sm font-semibold text-cinapi-gold transition group-hover:gap-2">
                  {card.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
