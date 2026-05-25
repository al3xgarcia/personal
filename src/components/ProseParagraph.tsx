import { brands } from "../data/brands";
import type { CopySegment } from "../data/copy";
import { BrandLinkFromEntry } from "./BrandLink";
import { PlainLink } from "./PlainLink";

type ProseParagraphProps = {
  segments: CopySegment[];
  className?: string;
};

export function ProseParagraph({ segments, className = "" }: ProseParagraphProps) {
  return (
    <p className={`text-4xl leading-relaxed text-foreground ${className}`}>
      {segments.map((segment, index) => {
        if (segment.type === "text") {
          return <span key={index}>{segment.value}</span>;
        }

        if (segment.type === "link") {
          return (
            <PlainLink key={index} href={segment.href}>
              {segment.label}
            </PlainLink>
          );
        }

        const entry = brands[segment.key];
        return (
          <BrandLinkFromEntry key={index} entry={entry} />
        );
      })}
    </p>
  );
}
