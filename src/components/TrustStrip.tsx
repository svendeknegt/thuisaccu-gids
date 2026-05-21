import { site } from "@/lib/site";

export function TrustStrip() {
  return (
    <div
      className="border-b border-surface-border bg-white"
      role="status"
      aria-label="Onafhankelijkheidsvermelding"
    >
      <div className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs text-ink-muted">
        <span>Onafhankelijk vergelijkplatform</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span>Wij verkopen zelf geen accu&apos;s</span>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <span>Laatst bijgewerkt: {site.lastUpdated}</span>
      </div>
    </div>
  );
}
