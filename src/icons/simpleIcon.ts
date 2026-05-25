import {
  siGoogle,
  siInstagram,
  siNextdoor,
  siReddit,
  siStrava,
} from "simple-icons";

export type SimpleIconData = {
  title: string;
  slug: string;
  hex: string;
  path: string;
};

const SIMPLE_ICON_MAP: Record<string, SimpleIconData> = {
  google: {
    title: siGoogle.title,
    slug: siGoogle.slug,
    hex: siGoogle.hex,
    path: siGoogle.path,
  },
  instagram: {
    title: siInstagram.title,
    slug: siInstagram.slug,
    hex: siInstagram.hex,
    path: siInstagram.path,
  },
  nextdoor: {
    title: siNextdoor.title,
    slug: siNextdoor.slug,
    hex: siNextdoor.hex,
    path: siNextdoor.path,
  },
  reddit: {
    title: siReddit.title,
    slug: siReddit.slug,
    hex: siReddit.hex,
    path: siReddit.path,
  },
  strava: {
    title: siStrava.title,
    slug: siStrava.slug,
    hex: siStrava.hex,
    path: siStrava.path,
  },
};

export function getSimpleIcon(slug: string): SimpleIconData | undefined {
  return SIMPLE_ICON_MAP[slug];
}

export function hexToCss(hex: string): string {
  return hex.startsWith("#") ? hex : `#${hex}`;
}
