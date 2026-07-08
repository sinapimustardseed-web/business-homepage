"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";
import { useContent } from "@/context/LanguageContext";

export default function Header() {
  const { nav } = useContent();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: nav.home },
    { href: "/products", label: nav.products },
    { href: "/contact", label: nav.contact },
    { href: "/company", label: nav.company },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cinapi-green/10 bg-cinapi-ivory/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:py-5">
        <Logo />

        <nav className="hidden items-center justify-center gap-10 md:flex lg:gap-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium uppercase tracking-wide text-cinapi-green/70 transition hover:text-cinapi-green"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cinapi-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-self-end gap-3 sm:gap-4">
          <LanguageSwitch />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-cinapi-green/20 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 1L17 17M17 1L1 17" stroke="#35482e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M0 1H18M0 7H18M0 13H18" stroke="#35482e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-cinapi-green/10 bg-cinapi-ivory md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-cinapi-green/80 transition hover:bg-cinapi-green/5 hover:text-cinapi-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
