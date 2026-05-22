import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/vergelijken",
    "/kennisbank",
    "/faq",
    "/over-ons",
    "/privacy",
    "/voorwaarden",
    "/affiliate-partners",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/vergelijken" ? 0.9 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/kennisbank/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...articleRoutes, ...productRoutes];
}
