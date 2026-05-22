import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Over ons",
  description: `Missie en werkwijze van ${site.name}.`,
};

export default function OverOnsPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Over ons</h1>
        <p className="section-lead mt-2">{site.description}</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Onze missie</h2>
          <p>
            Dure aankopen zoals thuisaccu&apos;s verdienen een rustige,
            overzichtelijke vergelijking. Wij helpen je feiten naast elkaar te
            zetten — zonder verkoopdruk.
          </p>

          <h2 className="text-lg font-semibold text-ink">Onafhankelijkheid</h2>
          <p>
            Wij hebben geen eigen voorraad en geen installatiedienst. Vergelijkingen
            zijn gebaseerd op specificaties, gebruikersdoelen en publieke
            prijsinformatie. Partners betalen soms commissie via affiliate-links;
            dat verandert onze sorteerlogica niet.
          </p>

          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p>
            Voor vragen, correcties of samenwerking: stuur een e-mail naar{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            . Stel dit e-mailadres in bij je domeinprovider (bijv. doorsturen naar je
            eigen inbox).
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
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
