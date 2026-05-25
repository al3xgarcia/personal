import hebFallback from "./fallbacks/heb.svg?raw";
import linkedinFallback from "./fallbacks/linkedin.svg?raw";
import spursFallback from "./fallbacks/sanantoniospurs.svg?raw";
import { getSimpleIcon, hexToCss, type SimpleIconData } from "./simpleIcon";

export type IconSource = "simple-icons" | "fallback" | "lucide";

export type ResolvedIcon = {
  source: IconSource;
  title: string;
  hex: string;
  slug: string;
};

const FALLBACK_META: Record<
  string,
  { svg: string; title: string; hex: string }
> = {
  heb: { svg: hebFallback, title: "H-E-B", hex: "EE2A24" },
  sanantoniospurs: {
    svg: spursFallback,
    title: "San Antonio Spurs",
    hex: "C4CED4",
  },
  linkedin: { svg: linkedinFallback, title: "LinkedIn", hex: "0A66C2" },
};

export function resolveIcon(slug: string): ResolvedIcon | undefined {
  const simple = getSimpleIcon(slug);
  if (simple) {
    return {
      source: "simple-icons",
      title: simple.title,
      hex: simple.hex,
      slug: simple.slug,
    };
  }

  const fallback = FALLBACK_META[slug];
  if (fallback) {
    return {
      source: "fallback",
      title: fallback.title,
      hex: fallback.hex,
      slug,
    };
  }

  if (slug === "blog") {
    return {
      source: "lucide",
      title: "Blog",
      hex: "",
      slug: "blog",
    };
  }

  return undefined;
}

export function getBrandColor(slug: string, override?: string): string {
  if (override) return override;
  const resolved = resolveIcon(slug);
  if (!resolved?.hex) return "var(--color-brand-blog)";
  return hexToCss(resolved.hex);
}

export function extractPathFromSvg(svg: string): string | null {
  const match = svg.match(/<path[^>]*\sd="([^"]+)"/);
  return match?.[1] ?? null;
}

export function getFallbackSvg(slug: string): string | undefined {
  return FALLBACK_META[slug]?.svg;
}

export { getSimpleIcon, hexToCss, type SimpleIconData };
