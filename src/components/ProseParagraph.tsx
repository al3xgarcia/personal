import { brands } from "../data/brands";
import type { CopySegment } from "../data/copy";
import { BrandLinkFromEntry } from "./BrandLink";

type ProseParagraphProps = {
  segments: CopySegment[];
  className?: string;
};

export function ProseParagraph({ segments, className = "" }: ProseParagraphProps) {
  return (
    <p className={`text-lg leading-relaxed text-foreground ${className}`}>
      {segments.map((segment, index) => {
        if (segment.type === "text") {
          return <span key={index}>{segment.value}</span>;
        }

        const entry = brands[segment.key];
        return (
          <BrandLinkFromEntry
            key={index}
            entry={entry}
            linkLabel={segment.linkLabel}
          />
        );
      })}
    </p>
  );
}
