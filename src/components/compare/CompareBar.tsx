"use client";

import Link from "next/link";
import { useCompare } from "@/components/compare/CompareContext";
import { site } from "@/lib/site";

export function CompareBar() {
  const { ids, clear } = useCompare();

  if (ids.length === 0) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface-border bg-white shadow-cardHover"
      role="region"
      aria-label="Vergelijking"
    >
      <div className="container-page flex flex-wrap items-center justify-between gap-3 py-3">
        <p className="text-sm text-ink-secondary">
          <span className="font-semibold text-ink">{ids.length}</span> van max.{" "}
          {site.maxCompare} geselecteerd
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={clear}
            className="btn-secondary py-2 text-sm"
          >
            Wis selectie
          </button>
          <Link
            href={`/vergelijken?compare=${ids.join(",")}`}
            className="btn-primary py-2 text-sm"
          >
            Vergelijk nu
          </Link>
        </div>
      </div>
    </div>
  );
}
