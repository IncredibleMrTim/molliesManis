"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-2xl text-primary">
          Mollies Manis
        </a>

        <div className="hidden items-center gap-8 text-sm font-bold text-body md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-br from-primary to-accent px-5 py-2 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
          >
            Order Now
          </a>
        </div>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="mb-1.5 h-0.5 w-5 rounded bg-primary" />
          <div className="mb-1.5 h-0.5 w-5 rounded bg-primary" />
          <div className="h-0.5 w-5 rounded bg-primary" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-3 px-6 pb-4 text-sm font-bold text-body md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-primary">
            Order Now ✨
          </a>
        </div>
      )}
    </nav>
  );
}
