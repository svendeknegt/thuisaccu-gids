import { formatPrice } from "@/lib/format";

interface AffiliateButtonProps {
  href: string;
  price?: number;
  label?: string;
  retailer?: string;
  className?: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export function AffiliateButton({
  href,
  price,
  label,
  retailer,
  className = "",
  variant = "primary",
  fullWidth = true,
}: AffiliateButtonProps) {
  const text =
    label ??
    (retailer ? `Bestel bij ${retailer}` : "Bestel bij winkel");

  const variantClass =
    variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variantClass} ${fullWidth ? "w-full" : "sm:w-auto"} ${className}`}
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
