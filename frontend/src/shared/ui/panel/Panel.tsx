import type { ReactNode } from "react";

interface IPanelProps {
  children: ReactNode;
}

export const Panel = ({ children }: IPanelProps) => (
  <section className="overflow-hidden rounded-3xl bg-card p-6 shadow-2xl sm:p-12">{children}</section>
);
