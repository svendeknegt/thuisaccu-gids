"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ARTICLE_SORT_OPTIONS,
  SearchSortBar,
} from "@/components/SearchSortBar";
import { articles, type Article } from "@/lib/articles";

function sortArticles(list: Article[], sortBy: string): Article[] {
  const copy = [...list];
  switch (sortBy) {
    case "oldest":
      return copy.sort(
        (a, b) =>
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
      );
    case "read_asc":
      return copy.sort((a, b) => a.readMinutes - b.readMinutes);
    case "title_asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title, "nl"));
    default:
      return copy.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  }
}

export function KennisbankClient() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = articles;
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.categoryLabel.toLowerCase().includes(q),
      );
    }
    return sortArticles(list, sortBy);
  }, [search, sortBy]);

  return (
    <>
      <SearchSortBar
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={setSortBy}
        sortOptions={[...ARTICLE_SORT_OPTIONS]}
        searchPlaceholder="Zoek in artikelen…"
        resultCount={filtered.length}
        resultLabel={filtered.length === 1 ? "artikel" : "artikelen"}
      />

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-ink-secondary py-12">
          Geen artikelen gevonden. Probeer een andere zoekterm of sortering.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <article key={article.id} className="card flex flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-brand">
                {article.categoryLabel}
              </p>
              <h2 className="mt-2 font-semibold text-ink">{article.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                {article.excerpt}
              </p>
              <p className="mt-4 text-xs text-ink-muted">
                {article.readMinutes} min ·{" "}
                {new Date(article.publishedAt).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <Link
                href={`/kennisbank/${article.slug}`}
                className="mt-4 text-sm font-medium text-brand hover:underline"
              >
                Lees artikel →
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
