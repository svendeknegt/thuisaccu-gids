import type { Metadata } from "next";
import { formatPrice, formatRating } from "@/lib/format";
import type { Article } from "@/lib/articles";
import {
  getCatalogPriceRange,
  getDisplayPrice,
  getProductById,
} from "@/lib/products";
import { getProductShopOffers } from "@/lib/shop-offers";
import { getRetailerLabel } from "@/lib/affiliate";
import { site } from "@/lib/site";

const MAX_DESC = 155;

function trimDescription(text: string): string {
  if (text.length <= MAX_DESC) return text;
  return `${text.slice(0, MAX_DESC - 1).trim()}…`;
}

/** Volledige SERP-titel — absolute, geen dubbele suffix via layout-template */
export function absoluteSerpTitle(title: string): Metadata["title"] {
  const full = `${title} | ${site.name}`;
  if (full.length <= 60) {
    return { absolute: full };
  }
  return { absolute: `${title.slice(0, 60 - site.name.length - 3).trim()}… | ${site.name}` };
}

type SerpCopy = { title: string; description: string };

function plugAndPlaySerp(): SerpCopy {
  const { min } = getCatalogPriceRange();
  const from = formatPrice(min);
  return {
    title: `Coolblue thuisbatterij — alternatief vanaf ${from}`,
    description: trimDescription(
      `Coolblue thuisbatterij = installateur (Enphase/Growatt). Plug-and-play vanaf ${from} bij Bol & Amazon. Gratis vergelijker · 21 modellen · objectief.`,
    ),
  };
}

function kwhBerekenenSerp(): SerpCopy {
  return {
    title: "kWh berekenen thuisaccu — gratis rekenhulp",
    description: trimDescription(
      "Hoe bereken je kWh voor een thuisaccu? Vuistregel 1–1,5 kWh per kWp + avondverbruik. Gratis keuzehulp en vergelijker — geen verkooppraat.",
    ),
  };
}

function terugverdientijdSerp(): SerpCopy {
  return {
    title: "Terugverdientijd thuisaccu — rekenvoorbeeld 2026",
    description: trimDescription(
      "Terugverdientijd thuisaccu: formule, rekenvoorbeeld (6–12 jaar) en valkuilen. Gratis keuzehulp voor jouw situatie — realistisch, zonder verkooppraat.",
    ),
  };
}

function bestekoopSerp(): SerpCopy {
  const { min } = getCatalogPriceRange();
  const from = formatPrice(min);
  return {
    title: "Beste thuisaccu 2026 — vergelijk vanaf " + from,
    description: trimDescription(
      `Beste thuisaccu 2026: EcoFlow, Jackery, Anker vergeleken op prijs per kWh. Vanaf ${from} bij Bol & Amazon. Gratis side-by-side vergelijker.`,
    ),
  };
}

const ARTICLE_SERP: Record<string, () => SerpCopy> = {
  "plug-and-play-vs-installateur": plugAndPlaySerp,
  "kwh-berekenen": kwhBerekenenSerp,
  terugverdientijd: terugverdientijdSerp,
  bestekoop: bestekoopSerp,
};

export function getArticleSerpCopy(article: Article): SerpCopy {
  const enhanced = ARTICLE_SERP[article.slug]?.();
  if (enhanced) return enhanced;

  return {
    title: article.seoTitle ?? article.title,
    description: trimDescription(
      article.seoDescription ?? article.excerpt,
    ),
  };
}

export function getProductSerpCopy(productId: string): SerpCopy | null {
  const product = getProductById(productId);
  if (!product) return null;

  const price = getDisplayPrice(product);
  const shops = getProductShopOffers(product)
    .map((o) => getRetailerLabel(o.retailer))
    .slice(0, 2)
    .join(" & ");
  const rating = formatRating(product.rating);
  const priceLabel = formatPrice(price);

  const byProduct: Record<string, SerpCopy> = {
    "anker-solix-c1000": {
      title: `Anker Solix C1000 — vanaf ${priceLabel}`,
      description: trimDescription(
        `Anker Solix C1000: 1 kWh, 1800 W, ★${rating}. Vergelijk ${shops} — laagste prijs ${priceLabel}. Specificaties & koopgids.`,
      ),
    },
    "ecoflow-delta-2-max": {
      title: `EcoFlow DELTA 2 Max — vanaf ${priceLabel}`,
      description: trimDescription(
        `DELTA 2 Max: 2 kWh, 2400 W, ★${rating}. Vergelijk prijs ${shops} — vanaf ${priceLabel}. Koopgids voor starters met zonnepanelen.`,
      ),
    },
    "ecoflow-delta-pro": {
      title: `EcoFlow DELTA Pro — vanaf ${priceLabel}`,
      description: trimDescription(
        `DELTA Pro: 3,6 kWh, 3600 W, ★${rating}. Vergelijk ${shops} — vanaf ${priceLabel}. Specificaties, voor- en nadelen.`,
      ),
    },
  };

  if (byProduct[productId]) return byProduct[productId];

  return {
    title: `${product.name} — vanaf ${priceLabel}`,
    description: trimDescription(
      `${product.name}: ${product.capacity} kWh, ${product.power} W, ★${rating}. Vergelijk ${shops} — vanaf ${priceLabel}. ${product.description}`,
    ),
  };
}
