"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";

const links = [
  { href: "/", label: "Home" },
  { href: "/keuzehulp", label: "Keuzehulp" },
  { href: "/vergelijken", label: "Vergelijken" },
  { href: "/kennisbank", label: "Kennisbank" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-white/95 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-3 md:h-16 md:gap-4">
        <SiteLogo onNavigate={() => setOpen(false)} className="min-w-0 max-md:text-sm" />

        <nav
          className={`${
            open
              ? "absolute left-0 right-0 top-14 flex flex-col gap-1 border-b border-surface-border bg-white p-3 shadow-card md:static md:top-16 md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-row md:items-center md:gap-1"
          }`}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition md:px-3 md:py-2 md:text-sm ${
                  active
                    ? "bg-brand-light text-brand-dark"
                    : "text-ink-secondary hover:bg-surface-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/keuzehulp"
            onClick={() => setOpen(false)}
            className="btn-primary mt-1 w-full justify-center text-sm md:mt-0 md:ml-2 md:w-auto"
          >
            Start keuzehulp
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-surface-border md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
