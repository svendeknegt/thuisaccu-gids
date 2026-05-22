import type { ArticleBlock } from "@/lib/article-content";

interface ArticleBodyProps {
  blocks: ArticleBlock[];
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="prose-article mt-8 space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-xl font-semibold text-ink pt-4 first:pt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-semibold text-ink pt-2">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-sm leading-relaxed text-ink-secondary"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-secondary"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-lg border border-brand/30 bg-brand-light/50 p-4"
              >
                <p className="text-sm font-semibold text-brand-dark">
                  {block.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {block.text}
                </p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
