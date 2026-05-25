type BrandIconProps = {
  iconSrc: string;
  brandColor?: string;
  className?: string;
};

export function BrandIcon({
  iconSrc,
  brandColor,
  className = "",
}: BrandIconProps) {
  const hasBrandBackground = Boolean(brandColor);

  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-icon-tile)] p-0.5 ${hasBrandBackground ? "" : "bg-brand-blog"} ${className}`}
      style={hasBrandBackground ? { backgroundColor: brandColor } : undefined}
      aria-hidden
    >
      <img
        src={iconSrc}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        decoding="async"
        className="size-full object-contain"
      />
    </span>
  );
}
