import Link from "next/link";
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
          {site.name} is een onafhankelijk vergelijkplatform. Wij verkopen geen
          accu&apos;s. Via onderstaande partners kun je doorklikken naar winkels;
          soms ontvangen wij daarvoor commissie.
        </p>
        <p className="mt-4 text-sm text-ink-muted">{getAffiliateSummary()}</p>

        <ul className="mt-10 space-y-6">
          {partnerPrograms.map((p) => (
            <li key={p.retailer} className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-ink">{p.label}</h2>
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
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                Naar aanmeldpagina ↗
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-ink-secondary">
          Beheerders: zie{" "}
          <code className="rounded bg-surface-muted px-1 text-xs">
            .env.example
          </code>{" "}
          en{" "}
          <code className="rounded bg-surface-muted px-1 text-xs">
            docs/AFFILIATE-LINKS.md
          </code>{" "}
          in de repository. Na wijziging in Vercel opnieuw deployen.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden
          </Link>
          <Link href="/faq" className="text-brand hover:underline">
            FAQ
          </Link>
          <Link href="/vergelijken" className="text-brand hover:underline">
            Vergelijken
          </Link>
        </div>
      </div>
    </div>
  );
}
