import {
  affiliateConfig,
  isAffiliateConfigured,
  retailerLabels,
  type Retailer,
} from "@/lib/affiliate";

export interface PartnerProgramInfo {
  retailer: Retailer;
  label: string;
  signupUrl: string;
  envKey: string;
  configured: boolean;
  note: string;
}

export const partnerPrograms: PartnerProgramInfo[] = [
  {
    retailer: "bol",
    label: retailerLabels.bol,
    signupUrl: "https://partner.bol.com",
    envKey: "NEXT_PUBLIC_BOL_PARTNER_ID",
    configured: isAffiliateConfigured("bol"),
    note: "Site-ID uit partner.bol.com (Account → websitegegevens).",
  },
  {
    retailer: "amazon",
    label: retailerLabels.amazon,
    signupUrl: "https://affiliate-program.amazon.nl",
    envKey: "NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG",
    configured: isAffiliateConfigured("amazon"),
    note: "Tracking-ID eindigt vaak op -21 (bijv. thuisaccugids-21).",
  },
  {
    retailer: "bluetti",
    label: retailerLabels.bluetti,
    signupUrl: "https://ui.awin.com/merchant-profile/95479",
    envKey: "NEXT_PUBLIC_BLUETTI_AFFILIATE_URL",
    configured: isAffiliateConfigured("bluetti"),
    note: "Bluetti EU (Awin 95479) — deeplink-template uit Link Builder na goedkeuring.",
  },
  {
    retailer: "coolblue",
    label: retailerLabels.coolblue,
    signupUrl: "https://www.awin.com",
    envKey: "NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL",
    configured: isAffiliateConfigured("coolblue"),
    note: "Awin → Coolblue NL → Link Builder → template met {url}.",
  },
  {
    retailer: "mediamarkt",
    label: retailerLabels.mediamarkt,
    signupUrl: "https://publisher.tradedoubler.com",
    envKey: "NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL",
    configured: isAffiliateConfigured("mediamarkt"),
    note: "MediaMarkt NL via Tradedoubler (programma 262336), niet Awin. Zie docs/MEDIAMARKT-TRADEDOUBLER.md.",
  },
  {
    retailer: "conrad",
    label: retailerLabels.conrad,
    signupUrl: "https://www.awin.com",
    envKey: "NEXT_PUBLIC_CONRAD_AFFILIATE_URL",
    configured: isAffiliateConfigured("conrad"),
    note: "Awin → Conrad NL joinen → deeplink-template met {url}.",
  },
];

export function getAffiliateSummary(): string {
  const active = partnerPrograms.filter((p) => p.configured).map((p) => p.label);
  if (active.length === 0) {
    return "Affiliate-ID's nog niet ingesteld — links gebruiken UTM-tracking.";
  }
  return `Actieve tracking: ${active.join(", ")}.`;
}

/** Alleen voor server/debug — nooit echte secrets loggen */
export function hasBolSiteId(): boolean {
  return Boolean(affiliateConfig.bolSiteId);
}
