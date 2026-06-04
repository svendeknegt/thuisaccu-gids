import { articles } from "@/lib/articles";
import {
  getArticleSeoDescription,
  getArticleSeoTitle,
} from "@/lib/seo";
import { faqs } from "@/lib/faq";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import { getProductShopOffers } from "@/lib/shop-offers";
import { site } from "@/lib/site";
import type { Product } from "@/types/product";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.contactEmail,
    description: site.description,
  };
}

export function websiteJsonLd() {
  const homeUrl = `${site.url}/`;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: homeUrl,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/vergelijken?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleJsonLd(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const pageUrl = `${site.url}/kennisbank/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: getArticleSeoDescription(article),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
  };
}

export function articleBreadcrumbJsonLd(slug: string) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const pageUrl = `${site.url}/kennisbank/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kennisbank",
        item: `${site.url}/kennisbank`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getArticleSeoTitle(article),
        item: pageUrl,
      },
    ],
  };
}

export function productJsonLd(product: Product) {
  const offers = getProductShopOffers(product);
  const image = product.image.startsWith("http")
    ? product.image
    : `${site.url}${product.image}`;

  const offerNodes = offers.map((offer) => ({
    "@type": "Offer" as const,
    price: offer.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: getShopOfferAffiliateUrl(product.id, offer),
    seller: {
      "@type": "Organization",
      name: offer.retailer === "amazon" ? "Amazon.nl" : offer.retailer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.description,
    image,
    ...(offers.length === 1
      ? { offers: offerNodes[0] }
      : {
          offers: {
            "@type": "AggregateOffer",
            lowPrice: Math.min(...offers.map((o) => o.price)),
            highPrice: Math.max(...offers.map((o) => o.price)),
            priceCurrency: "EUR",
            offerCount: offers.length,
            offers: offerNodes,
          },
        }),
  };
}
