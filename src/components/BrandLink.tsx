import type { MouseEvent, ReactNode } from "react";
import type { BrandEntry } from "../data/brands";
import { hexToCss } from "../icons";
import { trackOutboundClick } from "../lib/analytics/mixpanel";
import { BrandIcon } from "./BrandIcon";

export type BrandLinkProps = {
  href: string;
  children: ReactNode;
  slug: string;
  brandColor?: string;
  icon?: "simple" | "lucide";
  analyticsLabel?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function BrandLinkFromEntry({
  entry,
  children,
  linkLabel,
  className,
  onClick,
}: {
  entry: BrandEntry;
  children?: ReactNode;
  linkLabel?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const label = linkLabel ?? children ?? entry.label;
  const color = entry.hex ? hexToCss(entry.hex) : undefined;

  return (
    <BrandLink
      href={entry.href}
      slug={entry.slug}
      brandColor={color}
      analyticsLabel={entry.analyticsLabel ?? entry.slug}
      className={className}
      onClick={onClick}
    >
      {label}
    </BrandLink>
  );
}

export function BrandLink({
  href,
  children,
  slug,
  brandColor,
  analyticsLabel,
  className = "",
  onClick,
}: BrandLinkProps) {
  const destination = analyticsLabel ?? slug;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackOutboundClick({ destination });
    onClick?.(event);
  };

  return (
    <span
      className={`inline-flex items-center gap-1 align-baseline whitespace-nowrap ${className}`}
    >
      <BrandIcon slug={slug} brandColor={brandColor} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-muted underline-offset-2 hover:decoration-foreground"
        onClick={handleClick}
      >
        {children}
      </a>
    </span>
  );
}
