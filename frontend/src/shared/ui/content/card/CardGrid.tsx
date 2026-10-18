import type { ReactNode } from "react";

interface ICardGridProps {
  children: ReactNode;
}

export const CardGrid = ({ children }: ICardGridProps) => (
  <div className="mt-8 grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]">{children}</div>
);
