import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Methodologie — hoe wij vergelijken",
  description:
    "Transparante uitleg over onze vergelijkingscriteria, keuzehulp, prijsinformatie en onafhankelijkheid. Geen betaalde top-posities.",
  alternates: { canonical: `${site.url}/methodologie` },
};

const criteria = [
  {
    title: "Capaciteit (kWh)",
    text: "Hoeveel energie je kunt opslaan. Belangrijk voor avondverbruik en zonne-overschot.",
  },
  {
    title: "Vermogen (W)",
    text: "Hoeveel je tegelijk kunt voeden. Cruciaal voor inductie, warmtepomp of snel laden.",
  },
  {
    title: "Prijs per kWh capaciteit",
    text: "Catalogusprijs gedeeld door kWh — eerlijker vergelijken dan alleen totaalprijs.",
  },
  {
    title: "Chemie & cycli",
    text: "LFP (LiFePO4) is gangbaar voor lange levensduur; we vermelden fabriekscycli waar beschikbaar.",
  },
  {
    title: "Garantie & gebruik",
    text: "Garantieperiode, gewicht, uitbreidbaarheid en bestemming (besparen vs. dynamisch handelen).",
  },
  {
    title: "Voor- en nadelen",
    text: "Per model redactionele plus- en minpunten — geen kopie van winkelteksten.",
  },
];

export default function MethodologiePage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Methodologie</h1>
        <p className="section-lead mt-2">
          {site.name} is een onafhankelijk vergelijkplatform. Hier lees je hoe
          wij modellen selecteren, vergelijken en aanbevelen — en wat we bewust
          níet doen.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Wat wij bieden</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <Link href="/keuzehulp" className="text-brand hover:underline">
                Interactieve keuzehulp
              </Link>{" "}
              — capaciteitsadvies op basis van panelen, verbruik en doel
            </li>
            <li>
              <Link href="/vergelijken" className="text-brand hover:underline">
                Productvergelijker
              </Link>{" "}
              — filter, sorteer en vergelijk max. 3 modellen naast elkaar
            </li>
            <li>
              <Link href="/kennisbank" className="text-brand hover:underline">
                Kennisbank
              </Link>{" "}
              — redactionele gidsen over salderen, kWh, dynamische tarieven en
              aankoop
            </li>
            <li>
              Productpagina&apos;s met koopgids, geschikt-voor lijst en links
              naar meerdere winkels waar beschikbaar
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-ink">Vergelijkingscriteria</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {criteria.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-surface-border bg-white p-4"
              >
                <dt className="font-medium text-ink">{item.title}</dt>
                <dd className="mt-1 text-sm text-ink-secondary">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Keuzehulp — rekenmethode</h2>
          <p>
            De keuzehulp schat benodigde capaciteit (kWh) op basis van aantal
            panelen, geschat jaarverbruik en of je vooral wilt besparen of
            dynamisch wilt handelen. De geschatte jaarbesparing gebruikt
            indicatieve tarieven (~€0,30/kWh) en een vereenvoudigd model voor
            eigen verbruik en teruglevering. Terugverdientijd deelt een
            richtprijs (~€720 per kWh) door die besparing.
          </p>
          <p>
            Dit is <strong className="font-medium text-ink">geen persoonlijk financieel advies</strong>.
            Werkelijke resultaten variëren per contract, regio, weer en
            gebruiksgedrag. Gebruik het resultaat als startpunt en lees onze{" "}
            <Link
              href="/kennisbank/kwh-berekenen"
              className="text-brand hover:underline"
            >
              kWh-gids
            </Link>{" "}
            voor handmatige controle.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Onafhankelijkheid</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Wij verkopen geen accu&apos;s en hebben geen voorraad</li>
            <li>
              Geen betaalde &ldquo;top-positie&rdquo; — jij kiest de sortering
              (prijs, rating, prijs per kWh)
            </li>
            <li>
              Affiliate-commissie (o.a. Bol.com, Coolblue, Amazon) verandert onze
              sorteerlogica niet
            </li>
            <li>
              Prijzen op {site.name} zijn richtprijzen; de winkel is altijd
              leidend voor actuele prijs en voorraad
            </li>
          </ul>
          <p>
            Zie ook{" "}
            <Link href="/affiliate-partners" className="text-brand hover:underline">
              affiliate-partners
            </Link>{" "}
            en onze{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Selectie & updates</h2>
          <p>
            We tonen plug-and-play en modulaire thuisaccu&apos;s die in
            Nederland verkrijgbaar zijn via erkende retailers. Vaste
            meterkast-installaties vallen buiten scope. Producten worden
            periodiek gecontroleerd op specificaties; laatste site-update:{" "}
            {site.lastUpdated}.
          </p>
          <p>
            Fout gevonden? Mail{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/keuzehulp" className="btn-primary">
            Start keuzehulp
          </Link>
          <Link href="/vergelijken" className="btn-secondary">
            Vergelijk modellen
          </Link>
        </div>
      </div>
    </div>
  );
}
