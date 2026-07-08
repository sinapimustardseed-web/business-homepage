"use client";

import Link from "next/link";
import { useContent } from "@/context/LanguageContext";

export default function Hero() {
  const { hero } = useContent();

  return (
    <section className="relative overflow-hidden bg-cinapi-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(187,158,96,0.16), transparent 45%), radial-gradient(circle at 85% 0%, rgba(46,54,31,0.08), transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28 lg:gap-20 lg:py-36 xl:py-40">
        <div className="lg:border-l lg:border-cinapi-green/15 lg:pl-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cinapi-gold">
            AirDome · X-PILE
          </span>
          <h1 className="mt-4 break-keep text-4xl font-bold leading-[1.15] tracking-tight text-cinapi-green sm:text-5xl lg:text-6xl xl:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md break-keep text-lg leading-relaxed text-cinapi-olive">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-cinapi-green px-7 py-3.5 text-sm font-semibold text-cinapi-ivory shadow-sm transition hover:bg-cinapi-olive hover:shadow-md"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="/products"
              className="rounded-md border border-cinapi-green/25 px-7 py-3.5 text-sm font-semibold text-cinapi-green transition hover:border-cinapi-green hover:bg-cinapi-green/5"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Placeholder visual for the AirDome / product hero image */}
        <div
          className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-2xl border border-cinapi-green/15 bg-gradient-to-b from-cinapi-gold/10 via-cinapi-ivory to-cinapi-green/[0.06] shadow-[0_30px_80px_-30px_rgba(46,54,31,0.4)] ring-1 ring-cinapi-green/5 lg:aspect-[5/4]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(46,54,31,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,54,31,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Technical-drawing style corner marks */}
          <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-cinapi-green/25" />
          <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-cinapi-green/25" />
          <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cinapi-green/25" />
          <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cinapi-green/25" />

          <svg
            className="relative w-[72%] pb-14"
            viewBox="0 0 220 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="110" cy="112" rx="92" ry="7" fill="#35482e" opacity="0.12" />
            <path
              d="M14 112 C14 55 56 16 110 16 C164 16 206 55 206 112 Z"
              fill="url(#domeFill)"
              stroke="#35482e"
              strokeWidth="2.5"
            />
            <path
              d="M14 112 C14 55 56 16 110 16 C164 16 206 55 206 112"
              stroke="#bb9e60"
              strokeWidth="1"
              strokeDasharray="3 5"
              opacity="0.7"
            />
            <path d="M60 112 C60 78 82 55 110 55 C138 55 160 78 160 112" stroke="#584c22" strokeWidth="1.5" opacity="0.35" />
            <path d="M38 112 C38 68 70 34 110 34 C150 34 182 68 182 112" stroke="#35482e" strokeWidth="1" opacity="0.18" />
            <line x1="14" y1="112" x2="206" y2="112" stroke="#584c22" strokeWidth="2.5" />
            <defs>
              <linearGradient id="domeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bb9e60" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#35482e" stopOpacity="0.06" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dimension line */}
          <div className="absolute inset-x-16 bottom-7 flex items-center gap-2">
            <span className="h-px flex-1 bg-cinapi-green/25" />
            <span className="text-[10px] font-medium tracking-wider text-cinapi-green/40">AIRDOME SPAN</span>
            <span className="h-px flex-1 bg-cinapi-green/25" />
          </div>

          <span className="absolute right-4 top-4 rounded-full border border-cinapi-green/15 bg-cinapi-ivory/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cinapi-green/50 backdrop-blur">
            AirDome — visual placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
