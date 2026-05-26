import Link from "next/link";
import { AmazonAssociatesNotice } from "@/components/AmazonAssociatesNotice";
import { RetailerBadges } from "@/components/RetailerBadges";
import {
  coolblueEnergieAdviceUrl,
  countProductsWithRetailer,
  retailerInfo,
} from "@/lib/retailers";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata = {
  title: "Winkels & beschikbaarheid",
  description:
    "Waar je thuisaccu's kunt kopen: Bol.com, Amazon.nl en wanneer een installateur-route past. Transparant over affiliate en voorraad.",
  alternates: { canonical: `${site.url}/winkels` },
};

const statusLabel = {
  active: "Actief",
  pending: "In behandeling",
  unavailable: "Geen webshop-affiliate",
  info: "Informatie",
} as const;

export default function WinkelsPage() {
  const bolCount = countProductsWithRetailer("bol");
  const amazonCount = countProductsWithRetailer("amazon");

  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Winkels &amp; beschikbaarheid</h1>
        <p className="section-lead mt-2">
          {site.name} helpt je kiezen vóór je koopt. Hier zie je per winkel wat
          wij tonen, waar affiliate-links actief zijn en wanneer een
          installateur-route beter past dan een losse plug-and-play accu.
        </p>

        <ul className="mt-10 space-y-4">
          {retailerInfo.map((r) => (
            <li key={r.id} className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="font-semibold text-ink">{r.label}</h2>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    r.affiliateStatus === "active"
                      ? "bg-green-100 text-green-800"
                      : r.affiliateStatus === "pending"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-surface-muted text-ink-secondary"
                  }`}
                >
                  {statusLabel[r.affiliateStatus]}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-ink-secondary">
                {r.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {r.note}
              </p>
              {r.id === "bol" && (
                <p className="mt-2 text-sm text-ink-muted">
                  {bolCount} modellen met Bol-link op onze site.
                </p>
              )}
              {r.id === "amazon" && (
                <p className="mt-2 text-sm text-ink-muted">
                  {amazonCount} modellen (primair of als extra winkel).
                </p>
              )}
              {r.id === "coolblue" && (
                <p className="mt-3 text-sm">
                  <a
                    href={coolblueEnergieAdviceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Coolblue Energie — advies vaste thuisbatterij ↗
                  </a>
                  {" · "}
                  <Link
                    href="/kennisbank/plug-and-play-vs-installateur"
                    className="text-brand hover:underline"
                  >
                    Plug-and-play vs installateur
                  </Link>
                </p>
              )}
            </li>
          ))}
        </ul>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-ink">
            Modellen per winkel
          </h2>
          <p className="mt-2 text-sm text-ink-secondary">
            Geen nep-links: alleen winkels waar we een concrete product- of
            adviespagina hebben.
          </p>
          <ul className="mt-4 divide-y divide-surface-border rounded-xl border border-surface-border bg-white">
            {products.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm"
              >
                <Link
                  href={`/product/${p.id}`}
                  className="font-medium text-ink hover:text-brand"
                >
                  {p.name}
                </Link>
                <RetailerBadges product={p} />
              </li>
            ))}
          </ul>
        </section>

        <AmazonAssociatesNotice className="mt-10 rounded-xl border border-surface-border bg-surface-muted/50 p-4" />

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/keuzehulp" className="btn-primary">
            Start keuzehulp
          </Link>
          <Link href="/methodologie" className="btn-secondary">
            Methodologie
          </Link>
          <Link href="/affiliate-partners" className="btn-secondary">
            Affiliate-partners
          </Link>
        </div>
      </div>
    </div>
  );
}
