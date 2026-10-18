import type { ReactNode } from "react";

interface IGlossaryProps {
  children: ReactNode;
}

export const Glossary = ({ children }: IGlossaryProps) => (
  <dl className="mt-6 divide-y divide-line/60 rounded-2xl bg-card px-5">{children}</dl>
);
