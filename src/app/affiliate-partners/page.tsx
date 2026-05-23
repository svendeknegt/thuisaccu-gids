import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Affiliate-partners",
  description:
    "Transparantie over winkelpartners en affiliate-links op Thuisaccu-Gids.nl.",
};

const partners = [
  {
    name: "Bol.com",
    text: "Sommige links leiden naar productpagina's op Bol.com. Wij zijn geen onderdeel van Bol.com.",
  },
  {
    name: "Amazon.nl",
    text: "Voor geselecteerde modellen tonen wij ook een link naar Amazon.nl.",
  },
  {
    name: "Coolblue",
    text: "Waar beschikbaar verwijzen wij ook naar Coolblue. Wij zijn geen onderdeel van Coolblue.",
  },
  {
    name: "Overige winkels",
    text: "In de toekomst kunnen links naar andere betrouwbare Nederlandse winkels worden toegevoegd, steeds met duidelijke disclosure.",
  },
];

export default function AffiliatePartnersPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Affiliate-partners</h1>
        <p className="section-lead mt-2">
          {site.name} is een onafhankelijk vergelijkplatform. Wij verkopen geen
          accu&apos;s zelf. Via links op deze site kun je doorklikken naar
          externe winkels om een product te bekijken of te kopen.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">
            Hoe affiliate-links werken
          </h2>
          <p>
            Als je via een link op onze site koopt bij een partnerwinkel, kunnen
            wij soms een commissie ontvangen. Dat kost jou niets extra en
            verandert de prijs bij de winkel niet. Onze vergelijkingen worden
            hierdoor niet anders gesorteerd.
          </p>
          <p>
            Getoonde prijzen zijn indicatief. De prijs en voorwaarden bij de
            verkoper zijn leidend op het moment van aankoop.
          </p>
        </section>

        <ul className="mt-10 space-y-4">
          {partners.map((partner) => (
            <li key={partner.name} className="card p-5">
              <h2 className="font-semibold text-ink">{partner.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {partner.text}
              </p>
            </li>
          ))}
        </ul>

        <section className="mt-10 rounded-xl border border-surface-border bg-surface-muted/50 p-5 text-sm leading-relaxed text-ink-secondary">
          <p>
            Meer juridische achtergrond:{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
            ,{" "}
            <Link href="/voorwaarden" className="text-brand hover:underline">
              servicevoorwaarden
            </Link>{" "}
            en{" "}
            <Link href="/privacy" className="text-brand hover:underline">
              privacybeleid
            </Link>
            .
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/vergelijken" className="text-brand hover:underline">
            Vergelijken
          </Link>
          <Link href="/faq" className="text-brand hover:underline">
            Veelgestelde vragen
          </Link>
          <Link href="/over-ons" className="text-brand hover:underline">
            Over ons
          </Link>
        </div>
      </div>
    </div>
  );
}
