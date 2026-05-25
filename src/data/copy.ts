import type { BrandKey } from "./brands";

export type CopySegment =
  | { type: "text"; value: string }
  | { type: "brand"; key: BrandKey; linkLabel?: string }
  | { type: "link"; href: string; label: string };

export const introParagraph: CopySegment[] = [
  { type: "text", value: "I am a Product Manager " },
  { type: "brand", key: "heb" },
  { type: "text", value: " " },
  { type: "brand", key: "spurs" },
  { type: "text", value: " " },
  { type: "brand", key: "nextdoor" },
  { type: "text", value: " " },
  { type: "brand", key: "google", linkLabel: "Google" },
  { type: "text", value: " " },
  { type: "brand", key: "reddit", linkLabel: "Reddit" },
];

export const onlineParagraph: CopySegment[] = [
  { type: "text", value: "You can also find me on " },
  { type: "brand", key: "instagram", linkLabel: "Instagram" },
  { type: "text", value: ". I post longer thoughts on " },
  { type: "brand", key: "blog", linkLabel: "Bear Blog" },
  { type: "text", value: ", share work on " },
  { type: "brand", key: "linkedin", linkLabel: "LinkedIn" },
  { type: "text", value: ", and log runs on " },
  { type: "brand", key: "strava", linkLabel: "Strava" },
  { type: "text", value: ". Want to say hi? " },
  {
    type: "link",
    href: "mailto:l3xgarcia@gmail.com",
    label: "Click here",
  },
  { type: "text", value: "." },
];
