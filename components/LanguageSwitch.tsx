"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-cinapi-green/15 bg-cinapi-green/[0.03] p-1 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLanguage("ko")}
        aria-pressed={language === "ko"}
        className={
          "rounded-full px-3 py-1.5 transition " +
          (language === "ko"
            ? "bg-cinapi-gold text-cinapi-green shadow-sm"
            : "text-cinapi-green/50 hover:text-cinapi-green")
        }
      >
        한국어
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={
          "rounded-full px-3 py-1.5 tracking-wide transition " +
          (language === "en"
            ? "bg-cinapi-gold text-cinapi-green shadow-sm"
            : "text-cinapi-green/50 hover:text-cinapi-green")
        }
      >
        ENGLISH
      </button>
    </div>
  );
}
