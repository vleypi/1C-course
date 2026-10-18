import Link from "next/link";
import type { ReactNode } from "react";

interface IHeaderLinkProps {
  href: string;
  children: ReactNode;
}

export const HeaderLink = ({ href, children }: IHeaderLinkProps) => (
  <Link
    href={href}
    className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition hover:border-accent hover:text-accent"
  >
    {children}
  </Link>
);
