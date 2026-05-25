import type { MouseEvent, ReactNode } from "react";
import type { BrandEntry } from "../data/brands";
import { hexToCss } from "../icons";
import { BrandIcon } from "./BrandIcon";

export type BrandLinkProps = {
  href: string;
  children: ReactNode;
  slug: string;
  brandColor?: string;
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
  className = "",
  onClick,
}: BrandLinkProps) {
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
        onClick={onClick}
      >
        {children}
      </a>
    </span>
  );
}
