"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContent } from "@/context/LanguageContext";

export default function BlogPage() {
  const { blogPage, comingSoon } = useContent();

  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <div>
          <h1 className="break-keep text-3xl font-bold tracking-tight text-cinapi-green sm:text-4xl">
            {blogPage.headline}
          </h1>
          <p className="mt-4 text-base text-cinapi-olive">{comingSoon}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
