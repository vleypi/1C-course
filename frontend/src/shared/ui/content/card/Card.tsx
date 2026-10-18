import type { ReactNode } from "react";

interface ICardProps {
  title: string;
  icon?: string;
  label?: string;
  children: ReactNode;
}

export const Card = ({ title, icon, label, children }: ICardProps) => (
  <div className="rounded-2xl bg-card p-5">
    {icon && <div className="text-4xl" aria-hidden="true">{icon}</div>}
    {label && <p className="mt-3 text-sm uppercase tracking-widest text-muted">{label}</p>}
    <p className="mt-1 text-xl font-bold text-zinc-50">{title}</p>
    <div className="mt-3 text-base text-zinc-300 [&>p]:mt-0">{children}</div>
  </div>
);
