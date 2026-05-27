import Link from "next/link";
import { AmazonAssociatesNotice } from "@/components/AmazonAssociatesNotice";
import {
  coolblueEnergieAdviceUrl,
  countProductsWithRetailer,
} from "@/lib/retailers";
import { site } from "@/lib/site";

export const metadata = {
  title: "Affiliate-partners",
  description:
    "Transparantie over Bol.com, Amazon.nl, Coolblue en affiliate-links op Thuisaccu-Gids.nl.",
  alternates: { canonical: `${site.url}/affiliate-partners` },
};

const partners = [
  {
    name: "Bol.com",
    status: "Actief (Bol Partner)",
    text: `${countProductsWithRetailer("bol")} modellen met Bol-link op onze site. Wij zijn geen Bol-webshop; commissie loopt via partner.bol.com.`,
    links: [
      { href: "/winkels", label: "Beschikbaarheid per winkel" },
      { href: "/methodologie", label: "Onze methodologie" },
    ],
  },
  {
    name: "Amazon.nl",
    status: "Actief (Amazon Associates)",
    text: `${countProductsWithRetailer("amazon")} modellen via Amazon.nl (primair of naast Bol). Links bevatten onze tracking-tag.`,
    links: [{ href: "/winkels", label: "Welke modellen op Amazon" }],
  },
  {
    name: "Coolblue",
    status: "Geen webshop-affiliate voor onze modellen",
    text: "Coolblue's affiliate-programma dekt geen plug-and-play powerstations in ons assortiment. Voor vaste thuisbatterijen verwijzen wij naar informatie van Coolblue Energie (installateur-route), zonder commissie.",
    links: [
      {
        href: "/kennisbank/plug-and-play-vs-installateur",
        label: "Plug-and-play vs installateur",
      },
    ],
    external: coolblueEnergieAdviceUrl,
    externalLabel: "Coolblue Energie advies",
  },
];

export default function AffiliatePartnersPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Affiliate-partners</h1>
        <p className="section-lead mt-2">
          {site.name} is een onafhankelijk vergelijkplatform. Wij verkopen geen
          accu&apos;s. Bezoekers gebruiken onze keuzehulp en vergelijker{" "}
          <em>vóór</em> ze naar een winkel gaan — dat is onze toegevoegde waarde
          in de klantreis.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">
            Hoe affiliate-links werken
          </h2>
          <p>
            Via links op onze site kun je bij partnerwinkels kopen. Wij kunnen
            soms commissie ontvangen; dat kost jou niets extra en verandert de
            prijs bij de winkel niet. Onze sorteerlogica wordt niet verkocht.
          </p>
          <p>
            Getoonde prijzen zijn indicatief. De verkoper is leidend voor prijs,
            voorraad en garantie.
          </p>
        </section>

        <ul className="mt-10 space-y-4">
          {partners.map((partner) => (
            <li key={partner.name} className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="font-semibold text-ink">{partner.name}</h2>
                <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-secondary">
                  {partner.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {partner.text}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {partner.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
                {"external" in partner && partner.external && (
                  <a
                    href={partner.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    {partner.externalLabel} ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <AmazonAssociatesNotice className="mt-10 rounded-xl border border-surface-border bg-surface-muted/50 p-4" />

        <section className="mt-10 rounded-xl border border-surface-border bg-surface-muted/50 p-5 text-sm leading-relaxed text-ink-secondary">
          <h2 className="font-semibold text-ink">Onafhankelijkheid</h2>
          <p className="mt-2">
            Geen betaalde top-posities. Geen eigen voorraad. Redactionele
            criteria staan op{" "}
            <Link href="/methodologie" className="text-brand hover:underline">
              /methodologie
            </Link>
            . Juridisch:{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
            ,{" "}
            <Link href="/voorwaarden" className="text-brand hover:underline">
              voorwaarden
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-brand hover:underline">
              privacy
            </Link>
            .
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/keuzehulp" className="btn-primary">
            Keuzehulp
          </Link>
          <Link href="/winkels" className="btn-secondary">
            Winkels
          </Link>
          <Link href="/vergelijken" className="btn-secondary">
            Vergelijken
          </Link>
        </div>
      </div>
    </div>
  );
}
