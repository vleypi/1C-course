import type { ReactNode } from "react";

interface IGlossaryTermProps {
  term: string;
  children: ReactNode;
}

export const GlossaryTerm = ({ term, children }: IGlossaryTermProps) => (
  <div className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
    <dt className="font-semibold text-zinc-50">{term}</dt>
    <dd className="text-base text-zinc-300">{children}</dd>
  </div>
);
