import { formatPrice } from "@/lib/format";

interface AffiliateButtonProps {
  href: string;
  price?: number;
  label?: string;
  retailer?: string;
  className?: string;
}

export function AffiliateButton({
  href,
  price,
  label,
  retailer,
  className = "",
}: AffiliateButtonProps) {
  const text =
    label ?? (retailer ? `Bekijk op ${retailer}` : "Bekijk bij winkel");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`btn-primary w-full sm:w-auto ${className}`}
    >
      {text}
      {price != null && (
        <span className="ml-2 opacity-90">· {formatPrice(price)}</span>
      )}
      <span className="ml-1" aria-hidden>
        ↗
      </span>
    </a>
  );
}
