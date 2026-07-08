"use client";

import Logo from "./Logo";
import { useContent } from "@/context/LanguageContext";

export default function Footer() {
  const { footer } = useContent();

  return (
    <footer className="border-t border-cinapi-green/10 bg-cinapi-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-cinapi-olive">{footer.tagline}</p>
        </div>
        <p className="text-xs text-cinapi-green/50">{footer.rights}</p>
      </div>
    </footer>
  );
}
