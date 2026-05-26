import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Over ons",
  description: `Missie, methodologie en werkwijze van ${site.name}. Onafhankelijk vergelijken zonder webshop.`,
  alternates: { canonical: `${site.url}/over-ons` },
};

export default function OverOnsPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Over ons</h1>
        <p className="section-lead mt-2">{site.description}</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Wie zijn wij?</h2>
          <p>
            {site.name} is een onafhankelijk Nederlands vergelijkplatform voor
            thuisaccu&apos;s en portable powerstations. De site is opgezet door
            Sven Deknegt (Thuisaccu-Gids) om consumenten te helpen een
            weloverwogen keuze te maken — vóór ze naar een winkel zoals Bol.com,
            Coolblue of Amazon gaan.
          </p>

          <h2 className="text-lg font-semibold text-ink">Wat bieden wij?</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <Link href="/keuzehulp" className="text-brand hover:underline">
                Gratis keuzehulp
              </Link>{" "}
              — capaciteitsadvies, besparingsindicatie en modelaanbevelingen
            </li>
            <li>
              <Link href="/vergelijken" className="text-brand hover:underline">
                Productvergelijker
              </Link>{" "}
              — filter, sorteer en vergelijk max. 3 modellen objectief
            </li>
            <li>
              <Link href="/kennisbank" className="text-brand hover:underline">
                Kennisbank
              </Link>{" "}
              — redactionele gidsen over salderen, kWh, chemie en aankoop
            </li>
            <li>
              Productpagina&apos;s met koopgids, voor-/nadelen en links naar
              meerdere winkels
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">Onafhankelijkheid</h2>
          <p>
            Wij hebben geen eigen voorraad, geen installatiedienst en geen
            betaalde top-posities. Vergelijkingen zijn gebaseerd op
            specificaties, redactionele criteria en publieke prijsinformatie.
            Partners betalen soms commissie via affiliate-links; dat verandert
            onze sorteerlogica niet. Lees onze volledige{" "}
            <Link href="/methodologie" className="text-brand hover:underline">
              methodologie
            </Link>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">Wat wij niet doen</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Geen persoonlijk koop- of installatieadvies</li>
            <li>Geen prijsgarantie — richtprijzen, winkel is leidend</li>
            <li>Geen meterkast-installaties in onze vergelijking</li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p>
            Voor vragen, correcties of samenwerking:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>
          <p className="text-xs text-ink-muted">
            Laatste inhoudelijke update: {site.lastUpdated}
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/methodologie" className="text-brand hover:underline">
            Methodologie
          </Link>
          <Link href="/faq" className="text-brand hover:underline">
            Veelgestelde vragen
          </Link>
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden
          </Link>
          <Link href="/privacy" className="text-brand hover:underline">
            Privacybeleid
          </Link>
        </div>
      </div>
    </div>
  );
}
