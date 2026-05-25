import { NotebookPen } from "lucide-react";
import {
  extractPathFromSvg,
  getBrandColor,
  getFallbackSvg,
  getSimpleIcon,
} from "../icons";

type BrandIconProps = {
  slug: string;
  brandColor?: string;
  className?: string;
};

export function BrandIcon({ slug, brandColor, className = "" }: BrandIconProps) {
  const simple = getSimpleIcon(slug);
  const backgroundColor = getBrandColor(slug, brandColor);
  const isBlog = slug === "blog";

  const glyph = (() => {
    if (isBlog) {
      return (
        <NotebookPen
          className="size-7 text-foreground"
          strokeWidth={2}
          aria-hidden
        />
      );
    }

    if (simple) {
      return (
        <svg
          role="img"
          aria-hidden
          viewBox="0 0 24 24"
          className="size-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={simple.path} fill="currentColor" />
        </svg>
      );
    }

    const fallbackSvg = getFallbackSvg(slug);
    const path = fallbackSvg ? extractPathFromSvg(fallbackSvg) : null;
    if (path) {
      return (
        <svg
          role="img"
          aria-hidden
          viewBox="0 0 24 24"
          className="size-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} fill="currentColor" />
        </svg>
      );
    }

    return null;
  })();

  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-icon-tile)] p-1 text-white ${isBlog ? "text-foreground" : ""} ${className}`}
      style={{ backgroundColor: isBlog ? undefined : backgroundColor }}
      aria-hidden
    >
      <span
        className={
          isBlog
            ? "inline-flex items-center justify-center rounded-[var(--radius-icon-tile)] bg-brand-blog p-0.5"
            : "inline-flex items-center justify-center"
        }
      >
        {glyph}
      </span>
    </span>
  );
}
