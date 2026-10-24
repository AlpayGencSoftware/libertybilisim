"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
            L
          </div>
          <span className="text-xl font-bold tracking-tight">
            Liberty<span className="text-blue-600">Bilişim</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="ml-4 inline-flex h-9 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Teklif Alın
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground border-b border-border/40 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex h-9 w-full items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Teklif Alın
          </Link>
        </div>
      )}
    </header>
  );
}
