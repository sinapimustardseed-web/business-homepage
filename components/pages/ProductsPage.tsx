"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import { useContent } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { productsPage } = useContent();

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageIntro title={productsPage.headline} subtitle={productsPage.subcopy} />

        <section className="bg-cinapi-ivory">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="overflow-x-auto rounded-2xl border border-cinapi-green/15">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-cinapi-green text-cinapi-ivory">
                    <th className="px-6 py-4 font-semibold">{productsPage.tableHeaders.name}</th>
                    <th className="px-6 py-4 font-semibold">{productsPage.tableHeaders.purpose}</th>
                    <th className="px-6 py-4 font-semibold">{productsPage.tableHeaders.scale}</th>
                    <th className="px-6 py-4 font-semibold">{productsPage.tableHeaders.targetCustomers}</th>
                  </tr>
                </thead>
                <tbody>
                  {productsPage.comparison.map((row, index) => (
                    <tr
                      key={row.name}
                      className={index % 2 === 0 ? "bg-white/50" : "bg-cinapi-green/[0.03]"}
                    >
                      <td className="px-6 py-4 font-semibold text-cinapi-green">{row.name}</td>
                      <td className="px-6 py-4 text-cinapi-olive">{row.purpose}</td>
                      <td className="px-6 py-4 text-cinapi-olive">{row.scale}</td>
                      <td className="px-6 py-4 text-cinapi-olive">{row.targetCustomers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-cinapi-green/[0.04]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
            <div className="grid gap-6 md:grid-cols-2">
              {productsPage.ctaCards.map((card) => (
                <Link
                  key={card.name}
                  href={card.href}
                  className="group flex flex-col rounded-2xl border border-cinapi-green/12 bg-cinapi-ivory p-8 shadow-sm transition hover:-translate-y-1 hover:border-cinapi-gold hover:shadow-xl"
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-cinapi-green">{card.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cinapi-olive">{card.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cinapi-gold transition group-hover:gap-2">
                    {card.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
