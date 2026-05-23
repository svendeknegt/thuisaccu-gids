import Link from "next/link";
import {
  affiliateNetworks,
  affiliateSignupSteps,
} from "@/lib/affiliate-networks";
import { getAffiliateSummary, partnerPrograms } from "@/lib/affiliate-status";
import { site } from "@/lib/site";

export const metadata = {
  title: "Affiliate-partners",
  description:
    "Overzicht van winkelpartners en affiliate-programma's op Thuisaccu-Gids.nl.",
};

export default function AffiliatePartnersPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Affiliate-partners</h1>
        <p className="section-lead mt-2">
          {site.name} is een onafhankelijk vergelijkplatform. Meer winkels =
          betere prijsvergelijking voor bezoekers en meer affiliate-kansen voor
          jou. Onderstaand waar je je aanmeldt en wat al actief is.
        </p>
        <p className="mt-4 text-sm text-ink-muted">{getAffiliateSummary()}</p>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-ink">Tracking op de site</h2>
          <ul className="mt-4 space-y-4">
            {partnerPrograms.map((p) => (
              <li key={p.retailer} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-ink">{p.label}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      p.configured
                        ? "bg-brand-light text-brand-dark"
                        : "bg-surface-muted text-ink-muted"
                    }`}
                  >
                    {p.configured ? "Tracking actief" : "Nog niet ingesteld"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {p.note}
                </p>
                <p className="mt-2 font-mono text-xs text-ink-muted">
                  Env: {p.envKey}
                </p>
                <a
                  href={p.signupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
                  Naar aanmeldpagina ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">
            Netwerken & winkels om aan te melden
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            Prioriteit: eerst Awin-winkels met powerstations (Coolblue,
            MediaMarkt), daarna Bol-goedkeuring afwachten, daarna Daisycon of
            TradeTracker als backup.
          </p>
          <ul className="mt-6 space-y-6">
            {affiliateNetworks.map((network) => (
              <li key={network.id} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-ink">{network.name}</h3>
                  <a
                    href={network.signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand hover:underline"
                  >
                    Aanmelden ↗
                  </a>
                </div>
                <p className="mt-2 text-sm text-ink-secondary">{network.note}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
                  {network.merchants
                    .filter((m) => m.sellsPowerstations)
                    .map((merchant) => (
                      <li key={merchant.name} className="flex gap-2">
                        <span
                          className={
                            merchant.priority === "hoog"
                              ? "text-brand"
                              : "text-ink-muted"
                          }
                          aria-hidden
                        >
                          •
                        </span>
                        <span>
                          <strong className="font-medium text-ink">
                            {merchant.name}
                          </strong>
                          {merchant.envKey && (
                            <span className="block font-mono text-xs text-ink-muted">
                              {merchant.envKey}
                            </span>
                          )}
                          {merchant.priority === "hoog" && (
                            <span className="ml-1 text-xs text-brand-dark">
                              (prioriteit)
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-surface-border bg-surface-muted/50 p-5">
          <h2 className="font-semibold text-ink">Stappenplan na goedkeuring</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-ink-secondary">
            {affiliateSignupSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <p className="mt-10 text-sm leading-relaxed text-ink-secondary">
          <strong className="text-ink">Status:</strong> Amazon actief. Awin-account
          actief — Coolblue/MediaMarkt joinen en env-vars instellen. Bol wacht op
          goedkeuring.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/vergelijken" className="text-brand hover:underline">
            Vergelijken
          </Link>
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden
          </Link>
          <Link href="/faq" className="text-brand hover:underline">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
