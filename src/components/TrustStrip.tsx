import Link from "next/link";
import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div
      className="border-b border-surface-border bg-white"
      role="status"
      aria-label="Onafhankelijkheidsvermelding"
    >
      <div className="container-page flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-xs text-ink-muted">
        <span>Onafhankelijk vergelijkplatform</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span>Geen koopadvies · indicatieve prijzen</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <Link href="/disclaimer" className="hover:text-brand">
          Disclaimer
        </Link>
        <span className="hidden md:inline" aria-hidden>
          ·
        </span>
        <span className="hidden md:inline">Bijgewerkt: {site.lastUpdated}</span>
      </div>
    </div>
  );
}
