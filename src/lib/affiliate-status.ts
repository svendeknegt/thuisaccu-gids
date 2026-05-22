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
    retailer: "coolblue",
    label: retailerLabels.coolblue,
    signupUrl: "https://www.awin.com",
    envKey: "NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL",
    configured: isAffiliateConfigured("coolblue"),
    note: "Deeplink-template van Awin of Daisycon met {url} placeholder.",
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
