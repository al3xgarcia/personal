import { getBrandBySlug } from "../data/brands";

export function hexToCss(hex: string): string {
  return hex.startsWith("#") ? hex : `#${hex}`;
}

export function getBrandColor(slug: string, override?: string): string {
  if (override) return override;
  const entry = getBrandBySlug(slug);
  if (!entry?.hex) return "var(--color-brand-blog)";
  return hexToCss(entry.hex);
}
