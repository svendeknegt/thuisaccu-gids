import type { Metadata } from "next";
import { getArticleBySlug, type Article } from "@/lib/articles";
import { formatPrice } from "@/lib/format";
import { getDisplayPrice, getProductById } from "@/lib/products";
import { getProductShopOffers } from "@/lib/shop-offers";
import { getRetailerLabel } from "@/lib/affiliate";
import type { Product } from "@/types/product";
import { site } from "@/lib/site";

/** Google SERP-titel (zonder sitenaam — layout voegt template toe) */
export function getArticleSeoTitle(article: Article): string {
  return article.seoTitle ?? article.title;
}

export function getArticleSeoDescription(article: Article): string {
  return article.seoDescription ?? article.excerpt;
}

export function buildArticleMetadata(slug: string): Metadata | null {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const title = getArticleSeoTitle(article);
  const description = getArticleSeoDescription(article);
  const url = `${site.url}/kennisbank/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const productSeoOverrides: Record<
  string,
  { title: string; description: string }
> = {
  "ecoflow-delta-pro": {
    title: "EcoFlow DELTA Pro vergelijken — prijs Bol & Amazon",
    description:
      "EcoFlow DELTA Pro (3,6 kWh, 3600 W): vergelijk actuele prijzen bij Bol.com en Amazon.nl. Specificaties, voor- en nadelen en koopgids.",
  },
  "ecoflow-delta-2-max": {
    title: "EcoFlow DELTA 2 Max prijs vergelijken — Bol, Amazon, EcoFlow",
    description:
      "DELTA 2 Max 2 kWh: laagste prijs bij Bol, Amazon of EcoFlow NL. Objectieve koopgids voor starters met zonnepanelen.",
  },
  "ecoflow-river-2-max": {
    title: "EcoFlow RIVER 2 Max — prijs & winkels vergelijken",
    description:
      "RIVER 2 Max 512 Wh: vergelijk EcoFlow NL en Amazon.nl. Licht instapmodel voor camping en noodstroom.",
  },
  "jackery-explorer-500-v2": {
    title: "Jackery Explorer 500 V2 prijs — Bol vs Amazon",
    description:
      "Jackery 500 V2 (512 Wh): vergelijk prijzen op Amazon.nl en Bol.com. UPS en LFP — koopgids 2026.",
  },
  "anker-solix-f1500": {
    title: "Anker Solix F1500 vergelijken — prijs Bol & Amazon",
    description:
      "Anker F1500 1536 Wh / 1800 W: prijzen bij Bol.com en Amazon.nl naast elkaar. Koopgids en specificaties.",
  },
  "anker-solix-c1000": {
    title: "Anker Solix C1000 prijs — Bol vs Amazon vergelijken",
    description:
      "Anker Solix C1000 (1056 Wh, 1800 W): vergelijk actuele prijzen Bol.com en Amazon.nl. Specificaties en koopgids 2026.",
  },
  "jackery-explorer-2000-plus": {
    title: "Jackery Explorer 2000 Plus prijs vergelijken",
    description:
      "Jackery Explorer 2000 Plus (2042 Wh): prijzen Bol.com en Amazon.nl. Portable powerstation — koopgids 2026.",
  },
};

export function buildProductMetadata(productId: string): Metadata | null {
  const product = getProductById(productId);
  if (!product) return null;

  const override = productSeoOverrides[productId];
  const price = getDisplayPrice(product);
  const shops = getProductShopOffers(product)
    .map((o) => getRetailerLabel(o.retailer))
    .slice(0, 3)
    .join(", ");

  const title =
    override?.title ??
    `${product.name} vergelijken — vanaf ${formatPrice(price)}`;
  const description =
    override?.description ??
    `${product.name}: ${product.capacity} kWh, ${product.power} W. Vergelijk prijzen bij ${shops}. ${product.description}`;

  const url = `${site.url}/product/${productId}`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description.slice(0, 160),
    },
  };
}

export function buildProductDefaultMetadata(product: Product): Metadata {
  return (
    buildProductMetadata(product.id) ?? {
      title: product.name,
      description: product.description,
    }
  );
}
