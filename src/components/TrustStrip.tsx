import Link from "next/link";
import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div
      className="border-b border-surface-border bg-white"
      role="status"
      aria-label="Onafhankelijkheidsvermelding"
    >
      <div className="container-page flex flex-col items-start gap-1.5 py-2.5 text-xs text-ink-muted md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-4 md:gap-y-1 md:py-2">
        <span className="font-medium text-ink-secondary">Onafhankelijk vergelijkplatform</span>
        <span className="hidden md:inline" aria-hidden>
          ·
        </span>
        <span>Geen koopadvies · indicatieve prijzen</span>
        <span className="hidden md:inline" aria-hidden>
          ·
        </span>
        <Link href="/disclaimer" className="text-brand hover:underline">
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
