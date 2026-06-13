import type { Metadata } from "next";
import { getArticleBySlug, type Article } from "@/lib/articles";
import { getProductById } from "@/lib/products";
import {
  absoluteSerpTitle,
  getArticleSerpCopy,
  getProductSerpCopy,
} from "@/lib/serp";
import { site } from "@/lib/site";

/** Google SERP-titel (zonder sitenaam — layout voegt template toe) */
export function getArticleSeoTitle(article: Article): string {
  return getArticleSerpCopy(article).title;
}

export function getArticleSeoDescription(article: Article): string {
  return getArticleSerpCopy(article).description;
}

export function buildArticleMetadata(slug: string): Metadata | null {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const { title, description } = getArticleSerpCopy(article);
  const url = `${site.url}/kennisbank/${slug}`;

  return {
    title: absoluteSerpTitle(title),
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

export function buildProductMetadata(productId: string): Metadata | null {
  const product = getProductById(productId);
  if (!product) return null;

  const serp = getProductSerpCopy(productId);
  if (!serp) return null;

  const { title, description } = serp;
  const url = `${site.url}/product/${productId}`;

  return {
    title: absoluteSerpTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildProductDefaultMetadata(
  product: NonNullable<ReturnType<typeof getProductById>>,
): Metadata {
  return (
    buildProductMetadata(product.id) ?? {
      title: product.name,
      description: product.description,
    }
  );
}
