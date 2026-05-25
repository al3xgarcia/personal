export type BrandSource = "simple-icons" | "fallback" | "lucide";

export type BrandEntry = {
  slug: string;
  href: string;
  label: string;
  hex?: string;
  source: BrandSource;
  analyticsLabel?: string;
};

/** Hex values mirror @theme tokens in src/index.css */
export const brands = {
  heb: {
    slug: "heb",
    href: "https://www.heb.com/",
    label: "H-E-B",
    hex: "EE2A24",
    source: "fallback",
    analyticsLabel: "heb",
  },
  spurs: {
    slug: "sanantoniospurs",
    href: "https://www.nba.com/spurs",
    label: "San Antonio Spurs",
    hex: "C4CED4",
    source: "fallback",
    analyticsLabel: "sanantoniospurs",
  },
  nextdoor: {
    slug: "nextdoor",
    href: "https://nextdoor.com/",
    label: "Nextdoor",
    hex: "8ED500",
    source: "simple-icons",
    analyticsLabel: "nextdoor",
  },
  google: {
    slug: "google",
    href: "https://www.google.com/",
    label: "Google",
    hex: "4285F4",
    source: "simple-icons",
    analyticsLabel: "google",
  },
  reddit: {
    slug: "reddit",
    href: "https://www.reddit.com/",
    label: "Reddit",
    hex: "FF4500",
    source: "simple-icons",
    analyticsLabel: "reddit",
  },
  instagram: {
    slug: "instagram",
    href: "https://www.instagram.com/",
    label: "Instagram",
    hex: "FF0069",
    source: "simple-icons",
    analyticsLabel: "instagram",
  },
  linkedin: {
    slug: "linkedin",
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    hex: "0A66C2",
    source: "fallback",
    analyticsLabel: "linkedin",
  },
  strava: {
    slug: "strava",
    href: "https://www.strava.com/",
    label: "Strava",
    hex: "FC4C02",
    source: "simple-icons",
    analyticsLabel: "strava",
  },
  blog: {
    slug: "blog",
    href: "https://bearblog.dev/",
    label: "Bear Blog",
    source: "lucide",
    analyticsLabel: "bearblog",
  },
} as const satisfies Record<string, BrandEntry>;

export type BrandKey = keyof typeof brands;
