"use client";

import { useContent } from "@/context/LanguageContext";

const icons = [
  // Concrete-free foundation
  <svg key="foundation" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v9" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 12l-5 8M12 12l5 8" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 20h16" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Smart air-pressure structure
  <svg key="airdome" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 19c0-7 4-13 9-13s9 6 9 13" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3 19h18" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Energy-efficient operation
  <svg key="energy" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2 5 14h6l-2 8 9-13h-6l1-7Z" stroke="#bb9e60" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  // Climate & weather resilience
  <svg key="climate" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 17a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 16.5 17H7Z"
      stroke="#bb9e60"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 20v1M12.5 20v1.6M16 20v1" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Sustainable construction
  <svg key="sustainable" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21c-4.5-1-7-4.5-7-9 4 0 7 1.5 7 6M12 21c4.5-1 7-4.5 7-9-4 0-7 1.5-7 6"
      stroke="#bb9e60"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M12 18V9c0-2.5 1.5-5 4-6" stroke="#bb9e60" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

export default function Features() {
  const { features } = useContent();

  return (
    <section className="bg-cinapi-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28 xl:py-32">
        <h2 className="break-keep text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
          {features.heading}
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {features.items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cinapi-green/12 bg-gradient-to-b from-white/70 to-white/30 p-7 shadow-sm ring-1 ring-cinapi-green/[0.03] transition hover:-translate-y-0.5 hover:border-cinapi-gold/50 hover:shadow-md lg:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cinapi-green/[0.06] ring-1 ring-cinapi-green/10">
                {icons[index]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-cinapi-green">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cinapi-olive">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
