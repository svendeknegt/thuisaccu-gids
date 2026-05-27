import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { site } from "@/lib/site";

type SiteLogoProps = {
  showWordmark?: boolean;
  onNavigate?: () => void;
  className?: string;
};

export function SiteLogo({
  showWordmark = true,
  onNavigate,
  className = "",
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 font-semibold text-ink ${className}`}
      onClick={onNavigate}
    >
      <LogoMark size={36} className="shrink-0" aria-hidden={showWordmark} />
      {showWordmark ? <span>{site.name}</span> : null}
    </Link>
  );
}
