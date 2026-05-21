import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Kennisbank",
  description:
    "Gidsen over salderen, dynamische tarieven en het kiezen van een thuisaccu.",
};

export default function KennisbankPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page">
        <h1 className="section-title">Kennisbank</h1>
        <p className="section-lead">
          Achtergrondartikelen om je keuze te onderbouwen. Geen pop-ups, geen
          nieuwsbrief — alleen lezen.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="card flex flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-brand">
                {article.categoryLabel}
              </p>
              <h2 className="mt-2 font-semibold text-ink">{article.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">
                {article.excerpt}
              </p>
              <p className="mt-4 text-xs text-ink-muted">
                {article.readMinutes} min lezen
              </p>
              <Link
                href={`/kennisbank#${article.slug}`}
                className="mt-4 text-sm font-medium text-brand hover:underline"
              >
                Lees meer →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-surface-border bg-surface-muted/50 p-6 text-sm text-ink-secondary">
          <p className="font-medium text-ink">Volledige gidsen</p>
          <p className="mt-2">
            De oude statische artikelen staan in de map{" "}
            <code className="rounded bg-white px-1">legacy/</code> als je die
            wilt omzetten naar aparte Next.js-pagina&apos;s.
          </p>
        </div>
      </div>
    </div>
  );
}
