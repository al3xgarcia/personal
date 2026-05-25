import type { ReactNode } from "react";

type PlainLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PlainLink({ href, children, className = "" }: PlainLinkProps) {
  return (
    <a
      href={href}
      className={`underline decoration-muted underline-offset-2 hover:decoration-foreground ${className}`}
    >
      {children}
    </a>
  );
}
