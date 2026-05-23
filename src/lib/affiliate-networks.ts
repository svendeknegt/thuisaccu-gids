/** Aanmeld- en netwerkinfo voor affiliate-partners pagina */
export interface AffiliateMerchant {
  name: string;
  /** Zoekterm in Awin/Daisycon advertiser-zoekbalk */
  searchTerm: string;
  sellsPowerstations: boolean;
  envKey?: string;
  priority: "hoog" | "midden" | "laag";
}

export interface AffiliateNetwork {
  id: string;
  name: string;
  signupUrl: string;
  note: string;
  /** Eén account dekt meerdere winkels */
  multiMerchant: boolean;
  merchants: AffiliateMerchant[];
}

export const affiliateNetworks: AffiliateNetwork[] = [
  {
    id: "bol",
    name: "Bol Partner",
    signupUrl: "https://partner.bol.com",
    multiMerchant: false,
    note: "Direct programma. Site-ID in partner.bol.com → websitegegevens.",
    merchants: [
      {
        name: "Bol.com",
        searchTerm: "Bol",
        sellsPowerstations: true,
        envKey: "NEXT_PUBLIC_BOL_PARTNER_ID",
        priority: "hoog",
      },
    ],
  },
  {
    id: "amazon",
    name: "Amazon Associates NL",
    signupUrl: "https://affiliate-program.amazon.nl",
    multiMerchant: false,
    note: "Direct programma. Tag eindigt vaak op -21.",
    merchants: [
      {
        name: "Amazon.nl",
        searchTerm: "Amazon",
        sellsPowerstations: true,
        envKey: "NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG",
        priority: "hoog",
      },
    ],
  },
  {
    id: "awin",
    name: "Awin",
    signupUrl: "https://www.awin.com",
    multiMerchant: true,
    note: "Eén publisher-account. Per winkel apart Join aanvragen. Deeplink via Link Builder.",
    merchants: [
      {
        name: "Coolblue NL",
        searchTerm: "Coolblue",
        sellsPowerstations: true,
        envKey: "NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL",
        priority: "hoog",
      },
      {
        name: "MediaMarkt NL",
        searchTerm: "MediaMarkt",
        sellsPowerstations: true,
        envKey: "NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL",
        priority: "hoog",
      },
      {
        name: "Conrad NL",
        searchTerm: "Conrad",
        sellsPowerstations: true,
        envKey: "NEXT_PUBLIC_CONRAD_AFFILIATE_URL",
        priority: "midden",
      },
      {
        name: "BCC NL",
        searchTerm: "BCC",
        sellsPowerstations: true,
        priority: "midden",
      },
    ],
  },
  {
    id: "daisycon",
    name: "Daisycon",
    signupUrl: "https://www.daisycon.com",
    multiMerchant: true,
    note: "Alternatief netwerk. Zoek adverteerders na goedkeuring account.",
    merchants: [
      {
        name: "Coolblue (alternatief)",
        searchTerm: "Coolblue",
        sellsPowerstations: true,
        priority: "laag",
      },
      {
        name: "fonQ",
        searchTerm: "fonQ",
        sellsPowerstations: false,
        priority: "laag",
      },
    ],
  },
  {
    id: "tradetracker",
    name: "TradeTracker",
    signupUrl: "https://www.tradetracker.com",
    multiMerchant: true,
    note: "NL/EU netwerk. Handig als backup naast Awin.",
    merchants: [
      {
        name: "Diverse NL webshops",
        searchTerm: "thuisbatterij OR powerstation",
        sellsPowerstations: true,
        priority: "midden",
      },
    ],
  },
];

export const affiliateSignupSteps = [
  "Maak account aan bij netwerk (Awin heb je al).",
  "Voeg promotieruimte toe: https://www.thuisaccu-gids.nl (Content / Comparison Engine).",
  "Zoek adverteerder → Join → wacht op goedkeuring.",
  "Link Builder → deeplink-template met {url} → Vercel env-var → redeploy.",
  "Voeg product-URL's toe in src/lib/products.ts als extraOffers per winkel.",
] as const;
