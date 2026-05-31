import { site } from "@/lib/site";

/** Netwerk waar het product verkocht wordt */
export type Retailer =
  | "bol"
  | "coolblue"
  | "amazon"
  | "bluetti"
  | "ecoflow"
  | "mediamarkt"
  | "conrad"
  | "direct";

/**
 * Vul dit in zodra je partnerprogramma's goedkeuren.
 * Of zet dezelfde waarden in .env.local (zie .env.example).
 */
export const affiliateConfig = {
  /** Site-ID / website code uit partner.bol.com (Account → websitegegevens) */
  bolSiteId:
    process.env.NEXT_PUBLIC_BOL_PARTNER_ID?.trim() || "1522053",
  amazonTag:
    process.env.NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG?.trim() || "thuisaccugids-21",
  /** Awin deeplink-templates — {url} = encoded product-URL */
  coolblueTrackingTemplate:
    process.env.NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL?.trim() || "",
  mediamarktTrackingTemplate:
    process.env.NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL?.trim() || "",
  conradTrackingTemplate:
    process.env.NEXT_PUBLIC_CONRAD_AFFILIATE_URL?.trim() || "",
  bluettiTrackingTemplate:
    process.env.NEXT_PUBLIC_BLUETTI_AFFILIATE_URL?.trim() || "",
  ecoflowTrackingTemplate:
    process.env.NEXT_PUBLIC_ECOFLOW_AFFILIATE_URL?.trim() ||
    "https://www.awin1.com/cread.php?awinmid=123332&awinaffid=2906375&ued={url}",
} as const;

const awinTemplates: Partial<Record<Retailer, string>> = {
  coolblue: affiliateConfig.coolblueTrackingTemplate,
  mediamarkt: affiliateConfig.mediamarktTrackingTemplate,
  conrad: affiliateConfig.conradTrackingTemplate,
  bluetti: affiliateConfig.bluettiTrackingTemplate,
  ecoflow: affiliateConfig.ecoflowTrackingTemplate,
};

export function isAffiliateConfigured(retailer: Retailer): boolean {
  switch (retailer) {
    case "bol":
      return Boolean(affiliateConfig.bolSiteId);
    case "amazon":
      return Boolean(affiliateConfig.amazonTag);
    case "coolblue":
    case "mediamarkt":
    case "conrad":
    case "bluetti":
    case "ecoflow":
      return Boolean(awinTemplates[retailer]);
    default:
      return false;
  }
}

function appendUtm(url: string, productId: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", site.domain);
    parsed.searchParams.set("utm_medium", "referral");
    parsed.searchParams.set("utm_campaign", productId);
    return parsed.toString();
  } catch {
    return url;
  }
}

/** Bol Partner — link generator (site ID + name voor rapportage in Bol-dashboard) */
function buildBolLink(shopUrl: string, productId: string): string {
  const { bolSiteId } = affiliateConfig;
  if (!bolSiteId) return appendUtm(shopUrl, productId);

  const encoded = encodeURIComponent(shopUrl);
  const name = encodeURIComponent(productId);
  return `https://partner.bol.com/click/click?p=2&t=url&s=${bolSiteId}&f=TXL&url=${encoded}&name=${name}`;
}

export const retailerLabels: Record<Retailer, string> = {
  bol: "Bol.com",
  coolblue: "Coolblue",
  amazon: "Amazon.nl",
  bluetti: "Bluetti EU",
  ecoflow: "EcoFlow NL",
  mediamarkt: "MediaMarkt",
  conrad: "Conrad",
  direct: "Winkel",
};

export function getRetailerLabel(retailer: Retailer): string {
  return retailerLabels[retailer];
}

/** Amazon Associates — tag toevoegen aan product-URL */
function buildAmazonLink(shopUrl: string): string {
  const { amazonTag } = affiliateConfig;
  if (!amazonTag) return appendUtm(shopUrl, "amazon");

  try {
    const parsed = new URL(shopUrl);
    parsed.searchParams.set("tag", amazonTag);
    return parsed.toString();
  } catch {
    return shopUrl;
  }
}

/** Awin/Daisycon deeplink-template met {url} placeholder */
function buildAwinTemplateLink(shopUrl: string, template: string): string {
  if (template.includes("{url}")) {
    return template.replace("{url}", encodeURIComponent(shopUrl));
  }
  const separator = template.includes("?") ? "&" : "?";
  return `${template}${separator}ued=${encodeURIComponent(shopUrl)}`;
}

export function buildAffiliateUrl(
  shopUrl: string,
  retailer: Retailer,
  productId: string,
): string {
  switch (retailer) {
    case "bol":
      return buildBolLink(shopUrl, productId);
    case "amazon":
      return buildAmazonLink(shopUrl);
    case "coolblue":
    case "mediamarkt":
    case "conrad":
    case "bluetti":
    case "ecoflow": {
      const template = awinTemplates[retailer];
      if (!template) return appendUtm(shopUrl, productId);
      return buildAwinTemplateLink(shopUrl, template);
    }
    default:
      return appendUtm(shopUrl, productId);
  }
}
