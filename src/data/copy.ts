import type { BrandKey } from "./brands";

export type CopySegment =
  | { type: "text"; value: string }
  | { type: "brand"; key: BrandKey }
  | { type: "link"; href: string; label: string };

export const introParagraph: CopySegment[] = [
  { type: "text", value: "I am a product manager with experiences at " },
  { type: "brand", key: "heb" },
  { type: "text", value: " " },
  { type: "brand", key: "spurs" },
  { type: "text", value: " " },
  { type: "brand", key: "nextdoor" },
  { type: "text", value: " " },
  { type: "brand", key: "google" },
  { type: "text", value: " " },
  { type: "brand", key: "reddit" },
];

export const onlineParagraph: CopySegment[] = [
  { type: "text", value: "You can also find me on " },
  { type: "brand", key: "instagram" },
  { type: "text", value: ". I post longer thoughts on " },
  { type: "brand", key: "blog" },
  { type: "text", value: ", share work on " },
  { type: "brand", key: "linkedin" },
  { type: "text", value: ", and log runs on " },
  { type: "brand", key: "strava" },
  { type: "text", value: "." },
];

export const contactParagraph: CopySegment[] = [
  { type: "text", value: "Want to say hey? " },
  {
    type: "link",
    href: "mailto:l3xgarcia@gmail.com",
    label: "Click here",
  },
  { type: "text", value: "." },
];
