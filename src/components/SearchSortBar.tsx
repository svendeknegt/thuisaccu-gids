"use client";

interface SortOptionItem {
  value: string;
  label: string;
}

interface SearchSortBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  sortOptions: SortOptionItem[];
  searchPlaceholder?: string;
  resultCount?: number;
  resultLabel?: string;
}

export function SearchSortBar({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  sortOptions,
  searchPlaceholder = "Zoeken…",
  resultCount,
  resultLabel = "resultaten",
}: SearchSortBarProps) {
  return (
    <div className="card mt-8 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Zoeken</span>
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
            aria-hidden
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-lg border border-surface-border bg-white py-2.5 pl-10 pr-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </label>

        <div className="flex shrink-0 items-center gap-2">
          <label htmlFor="sort-select" className="text-sm font-medium text-ink-secondary whitespace-nowrap">
            Sorteer
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="min-w-[11rem] rounded-lg border border-surface-border bg-white px-3 py-2.5 text-sm font-medium text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {resultCount !== undefined && (
        <p className="mt-3 text-xs text-ink-muted">
          {resultCount} {resultLabel}
          {search.trim() ? ` voor “${search.trim()}”` : ""}
        </p>
      )}
    </div>
  );
}

export const PRODUCT_SORT_OPTIONS = [
  { value: "rating_desc", label: "Beste beoordeling" },
  { value: "price_asc", label: "Laagste prijs" },
  { value: "price_per_kwh_asc", label: "Laagste prijs per kWh" },
  { value: "price_desc", label: "Hoogste prijs" },
  { value: "capacity_desc", label: "Grootste capaciteit" },
] as const;

export const ARTICLE_SORT_OPTIONS = [
  { value: "newest", label: "Nieuwste eerst" },
  { value: "oldest", label: "Oudste eerst" },
  { value: "read_asc", label: "Kortste leestijd" },
  { value: "title_asc", label: "Titel A–Z" },
] as const;
