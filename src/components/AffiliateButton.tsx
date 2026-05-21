import { formatPrice } from "@/lib/format";

interface AffiliateButtonProps {
  href: string;
  price?: number;
  label?: string;
  className?: string;
}

export function AffiliateButton({
  href,
  price,
  label = "Bekijk bij winkel",
  className = "",
}: AffiliateButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`btn-primary w-full sm:w-auto ${className}`}
    >
      {label}
      {price != null && (
        <span className="ml-2 opacity-90">· {formatPrice(price)}</span>
      )}
      <span className="ml-1" aria-hidden>
        ↗
      </span>
    </a>
  );
}
