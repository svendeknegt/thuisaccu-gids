import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Disclaimer",
  description: `Aansprakelijkheids- en informatiedisclaimer van ${site.name}.`,
  alternates: { canonical: `${site.url}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="py-10 sm:py-14">
      <article className="container-page max-w-3xl">
        <h1 className="section-title">Disclaimer</h1>
        <p className="section-lead mt-2">
          Laatst bijgewerkt: {site.lastUpdated}. Lees deze pagina samen met onze{" "}
          <Link href="/voorwaarden" className="text-brand hover:underline">
            servicevoorwaarden
          </Link>{" "}
          en ons{" "}
          <Link href="/privacy" className="text-brand hover:underline">
            privacybeleid
          </Link>
          .
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">1. Aard van de site</h2>
          <p>
            {site.name} ({site.url}) is een onafhankelijk informatie- en
            vergelijkplatform voor thuisaccu&apos;s en portable powerstations.
            Wij verkopen geen producten, sluiten geen koopovereenkomsten en
            verlenen geen installatiediensten. Alle aankopen vinden plaats bij
            externe verkopers.
          </p>

          <h2 className="text-lg font-semibold text-ink">2. Geen professioneel advies</h2>
          <p>
            Alle content op deze site — inclusief vergelijkingen, koopgidsen,
            keuzehulp, FAQ en kennisbankartikelen — is uitsluitend bedoeld als
            algemene informatie. Het vormt{" "}
            <strong className="font-medium text-ink">geen</strong> persoonlijk
            koopadvies, financieel advies, belastingadvies, juridisch advies,
            bouwkundig advies of advies over elektrische installaties.
          </p>
          <p>
            Thuisaccu&apos;s en stroomopslag raken aan veiligheid, netcapaciteit
            en soms vergunningen. Raadpleeg altijd de fabrikant, een erkende
            installateur en — waar nodig — een deskundige vóór aankoop of
            gebruik.
          </p>

          <h2 className="text-lg font-semibold text-ink">3. Geen garantie op juistheid</h2>
          <p>
            Wij streven naar actuele en correcte informatie, maar kunnen{" "}
            <strong className="font-medium text-ink">geen garantie</strong> geven
            op volledigheid, juistheid of geschiktheid voor jouw situatie.
            Specificaties, prijzen, afbeeldingen, voorraad, levertijden,
            garantievoorwaarden en productnamen kunnen wijzigen zonder dat wij
            dat direct doorvoeren op onze site.
          </p>
          <p>
            Getoonde prijzen zijn richtprijzen op basis van publieke
            winkelinformatie op het moment van laatste controle. De prijs bij
            checkout bij de verkoper is leidend.
          </p>

          <h2 className="text-lg font-semibold text-ink">4. Externe links en affiliate</h2>
          <p>
            Links naar Bol.com, Coolblue, Amazon.nl en andere partners leiden
            naar websites van derden. Wij hebben geen controle over hun content,
            prijzen, cookies, privacybeleid of klantenservice. Zodra je onze
            site verlaat, gelden de voorwaarden van die partij.
          </p>
          <p>
            Sommige links zijn affiliate-links: als je via zo&apos;n link koopt,
            kunnen wij een commissie ontvangen zonder extra kosten voor jou.
            Affiliate-vergoedingen beïnvloeden onze sorteerlogica niet; zie ook{" "}
            <Link href="/over-ons" className="text-brand hover:underline">
              Over ons
            </Link>
            .
          </p>
          <p>
            {site.name} is geen handelsmerk van Bol.com, Coolblue, Amazon of
            genoemde fabrikanten. Productnamen en logo&apos;s zijn eigendom van
            de respectieve rechthebbenden.
          </p>

          <h2 className="text-lg font-semibold text-ink">5. Aansprakelijkheid</h2>
          <p>
            Voor zover wettelijk toegestaan aanvaarden wij geen aansprakelijkheid
            voor directe of indirecte schade voortvloeiend uit het gebruik van
            deze site of het vertrouwen op getoonde informatie, waaronder
            onder meer:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>financiële verliezen of gemiste besparingen;</li>
            <li>defecte, ongeschikte of verkeerd geleverde producten;</li>
            <li>brand, elektrische schade of andere gevolgen van gebruik van accu&apos;s;</li>
            <li>storingen, downtime of onjuiste doorverwijzingen;</li>
            <li>handelingen of nalatigheden van externe verkopers of partners.</li>
          </ul>
          <p>
            Klachten over producten, leveringen of garantie richt je uitsluitend
            aan de verkoper waarbij je hebt besteld.
          </p>

          <h2 className="text-lg font-semibold text-ink">6. Eigen verantwoordelijkheid</h2>
          <p>
            Je gebruikt {site.name} op eigen risico. Je bent zelf verantwoordelijk
            voor het controleren van specificaties, compatibiliteit (EU-voltage,
            aansluitingen, omvormers), veiligheidsvoorschriften en lokale regels
            vóór aankoop of inbedrijfstelling.
          </p>

          <h2 className="text-lg font-semibold text-ink">7. Wijzigingen</h2>
          <p>
            Wij kunnen deze disclaimer en andere juridische pagina&apos;s
            wijzigen. De datum bovenaan geeft de laatste wijziging aan.
            Voortgezet gebruik na wijziging geldt als kennisname, tenzij de wet
            anders vereist.
          </p>

          <h2 className="text-lg font-semibold text-ink">8. Toepasselijk recht</h2>
          <p>
            Op deze disclaimer en het gebruik van de site is Nederlands recht
            van toepassing, voor zover dwingend recht geen andere regels stelt.
          </p>

          <h2 className="text-lg font-semibold text-ink">9. Contact</h2>
          <p>
            Vragen over deze disclaimer? Mail{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </section>

        <p className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden →
          </Link>
          <Link href="/privacy" className="text-brand hover:underline">
            Privacybeleid →
          </Link>
        </p>
      </article>
    </div>
  );
}
