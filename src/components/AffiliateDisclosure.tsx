import Link from "next/link";
import { site } from "@/lib/site";

interface AffiliateDisclosureProps {
  retailer?: string;
  className?: string;
  compact?: boolean;
}

export function AffiliateDisclosure({
  retailer,
  className = "",
  compact = false,
}: AffiliateDisclosureProps) {
  const shop = retailer ? ` bij ${retailer}` : " bij partnerwinkels";

  if (compact) {
    return (
      <p className={`text-xs leading-relaxed text-ink-muted ${className}`}>
        Indicatieve info · affiliate-links · geen koopadvies ·{" "}
        <Link href="/disclaimer" className="text-brand hover:underline">
          disclaimer
        </Link>
      </p>
    );
  }

  return (
    <p
      className={`rounded-lg border border-surface-border bg-surface-muted/60 p-4 text-xs leading-relaxed text-ink-muted ${className}`}
    >
      <strong className="text-ink-secondary">Affiliate-disclosure.</strong>{" "}
      {site.name} is een onafhankelijk vergelijkplatform, geen webshop
      {retailer === "Bol.com" ? " en geen onderdeel van Bol.com" : ""}.
      Via links op deze pagina kun je{shop} kopen. Wij kunnen daarvoor een
      commissie ontvangen; dat kost jou niets extra. Prijzen, specificaties en
      voorraad zijn indicatief — controleer altijd op de site van de verkoper.
      Geen persoonlijk koop- of installatieadvies. Zie onze{" "}
      <Link href="/disclaimer" className="font-medium text-brand hover:underline">
        disclaimer
      </Link>
      .
    </p>
  );
}
