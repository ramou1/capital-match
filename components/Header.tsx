"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-navy-900/75 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/40"
            aria-hidden
          >
            <span className="text-lg font-bold text-gold">CM</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Capital Match
            </h1>
            <p className="text-xs text-navy-400 sm:text-sm">
              Conectando startups a investidores
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Plataforma em beta
        </div>
      </div>
    </header>
  );
}
