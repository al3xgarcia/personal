export type BrandSource = "image";

export type BrandEntry = {
  slug: string;
  href: string;
  label: string;
  iconSrc: string;
  hex?: string;
  source: BrandSource;
};

/** Hex values mirror @theme tokens in src/index.css */
export const brands = {
  heb: {
    slug: "heb",
    href: "https://www.heb.com/",
    label: "H-E-B",
    iconSrc: "/heb.webp",
    hex: "EE2A24",
    source: "image",
  },
  spurs: {
    slug: "sanantoniospurs",
    href: "https://www.nba.com/spurs",
    label: "San Antonio Spurs",
    iconSrc: "/spurs.webp",
    hex: "C4CED4",
    source: "image",
  },
  nextdoor: {
    slug: "nextdoor",
    href: "https://nextdoor.com/",
    label: "Nextdoor",
    iconSrc: "/nextdoor.webp",
    hex: "8ED500",
    source: "image",
  },
  google: {
    slug: "google",
    href: "https://www.google.com/",
    label: "Google",
    iconSrc: "/google.webp",
    hex: "4285F4",
    source: "image",
  },
  reddit: {
    slug: "reddit",
    href: "https://www.reddit.com/",
    label: "Reddit",
    iconSrc: "/reddit.webp",
    hex: "FF4500",
    source: "image",
  },
  instagram: {
    slug: "instagram",
    href: "https://www.instagram.com/al3xgarcia",
    label: "Instagram",
    iconSrc: "/instagram.webp",
    hex: "FF0069",
    source: "image",
  },
  linkedin: {
    slug: "linkedin",
    href: "https://www.linkedin.com/in/al3xgarcia/",
    label: "LinkedIn",
    iconSrc: "/linkedin.webp",
    hex: "0A66C2",
    source: "image",
  },
  strava: {
    slug: "strava",
    href: "https://www.strava.com/athletes/42900839",
    label: "Strava",
    iconSrc: "/strava.webp",
    hex: "FC4C02",
    source: "image",
  },
  blog: {
    slug: "blog",
    href: "https://monkeymind.bearblog.dev/",
    label: "Bear Blog",
    iconSrc: "/blog.webp",
    source: "image",
  },
} as const satisfies Record<string, BrandEntry>;

export type BrandKey = keyof typeof brands;

export function getBrandBySlug(slug: string): BrandEntry | undefined {
  return Object.values(brands).find((brand) => brand.slug === slug);
}
