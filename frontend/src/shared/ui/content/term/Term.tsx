import type { ReactNode } from "react";

interface ITermProps {
  title: string;
  children: ReactNode;
}

export const Term = ({ title, children }: ITermProps) => (
  <div className="border-l-2 border-accent pl-5">
    <dt className="text-xl font-bold text-zinc-50">{title}</dt>
    <dd className="mt-2 [&>p]:mt-0">{children}</dd>
  </div>
);
