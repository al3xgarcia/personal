import type { BrandKey } from "./brands";

export type CopySegment =
  | { type: "text"; value: string }
  | { type: "brand"; key: BrandKey; linkLabel?: string };

export const introParagraph: CopySegment[] = [
  { type: "text", value: "Hi — I shop at " },
  { type: "brand", key: "heb" },
  { type: "text", value: ", cheer for the " },
  { type: "brand", key: "spurs" },
  {
    type: "text",
    value: ", and keep up with neighbors on ",
  },
  { type: "brand", key: "nextdoor" },
  { type: "text", value: "." },
];

export const onlineParagraph: CopySegment[] = [
  { type: "text", value: "You can find me on " },
  { type: "brand", key: "google", linkLabel: "Google" },
  { type: "text", value: ", " },
  { type: "brand", key: "reddit", linkLabel: "Reddit" },
  { type: "text", value: ", and " },
  { type: "brand", key: "instagram", linkLabel: "Instagram" },
  { type: "text", value: ". I post longer thoughts on " },
  { type: "brand", key: "blog", linkLabel: "Bear Blog" },
  { type: "text", value: ", share work on " },
  { type: "brand", key: "linkedin", linkLabel: "LinkedIn" },
  { type: "text", value: ", and log runs on " },
  { type: "brand", key: "strava", linkLabel: "Strava" },
  { type: "text", value: "." },
];
