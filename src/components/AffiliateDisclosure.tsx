import { site } from "@/lib/site";

interface AffiliateDisclosureProps {
  retailer?: string;
  className?: string;
}

export function AffiliateDisclosure({
  retailer,
  className = "",
}: AffiliateDisclosureProps) {
  const shop = retailer ? ` bij ${retailer}` : " bij partnerwinkels";

  return (
    <p
      className={`rounded-lg border border-surface-border bg-surface-muted/60 p-4 text-xs leading-relaxed text-ink-muted ${className}`}
    >
      <strong className="text-ink-secondary">Affiliate-disclosure.</strong>{" "}
      {site.name} is een onafhankelijk vergelijkplatform, geen webshop{retailer === "Bol.com" ? " en geen onderdeel van Bol.com" : ""}.
      Via links op deze pagina kun je{shop} kopen. Wij kunnen daarvoor een
      commissie ontvangen; dat kost jou niets extra. Prijzen en voorraad zijn
      indicatief — controleer altijd op de site van de verkoper.
    </p>
  );
}
