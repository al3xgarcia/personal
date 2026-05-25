import type { MouseEvent } from "react";
import type { BrandEntry } from "../data/brands";
import { hexToCss } from "../icons";
import { BrandIcon } from "./BrandIcon";

export type BrandLinkProps = {
  href: string;
  label: string;
  iconSrc: string;
  brandColor?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function BrandLinkFromEntry({
  entry,
  linkLabel,
  className,
  onClick,
}: {
  entry: BrandEntry;
  linkLabel?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const color = entry.hex ? hexToCss(entry.hex) : undefined;

  return (
    <BrandLink
      href={entry.href}
      iconSrc={entry.iconSrc}
      label={linkLabel ?? entry.label}
      brandColor={color}
      className={className}
      onClick={onClick}
    />
  );
}

export function BrandLink({
  href,
  label,
  iconSrc,
  brandColor,
  className = "",
  onClick,
}: BrandLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex shrink-0 align-middle no-underline ${className}`}
      onClick={onClick}
    >
      <BrandIcon iconSrc={iconSrc} brandColor={brandColor} />
    </a>
  );
}
