import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ArticleBody } from "@/components/ArticleBody";
import { JsonLd } from "@/components/JsonLd";
import { articleBodies } from "@/lib/article-content";
import { articles, getArticleBySlug } from "@/lib/articles";
import { articleJsonLd } from "@/lib/structured-data";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Niet gevonden" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${site.url}/kennisbank/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/kennisbank/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const body = article ? articleBodies[slug] : undefined;

  if (!article || !body) notFound();

  const jsonLd = articleJsonLd(slug);

  return (
    <div className="py-10 sm:py-14">
      {jsonLd && <JsonLd data={jsonLd} />}
      <article className="container-page max-w-3xl">
        <Link
          href="/kennisbank"
          className="text-sm text-ink-muted hover:text-brand"
        >
          ← Terug naar kennisbank
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-wide text-brand">
          {article.categoryLabel}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          {article.excerpt}
        </p>
        <p className="mt-3 text-xs text-ink-muted">
          {article.readMinutes} min leestijd ·{" "}
          {new Date(article.publishedAt).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <ArticleBody blocks={body} />

        <AffiliateDisclosure className="mt-10" />

        <div className="mt-10 flex flex-wrap gap-4 border-t border-surface-border pt-8 text-sm">
          <Link href="/vergelijken" className="btn-primary">
            Vergelijk thuisaccu&apos;s
          </Link>
          <Link href="/kennisbank" className="btn-secondary">
            Meer artikelen
          </Link>
        </div>
      </article>
    </div>
  );
}
