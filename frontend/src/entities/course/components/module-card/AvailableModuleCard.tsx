import Link from "next/link";
import type { ReactNode } from "react";

interface IAvailableModuleCardProps {
  href: string;
  children: ReactNode;
}

export const AvailableModuleCard = ({ href, children }: IAvailableModuleCardProps) => (
  <Link href={href} className="group block h-full">
    {children}
  </Link>
);
