import type { ReactNode } from "react";
import { CARD_ICONS, type CardIconName } from "@/shared/ui/content/card/card-icons";

interface ICardProps {
  title: string;
  icon?: CardIconName;
  label?: string;
  children: ReactNode;
}

export const Card = ({ title, icon, label, children }: ICardProps) => {
  const Icon = icon ? CARD_ICONS[icon] : null;

  return (
    <div className="flex flex-col rounded-2xl bg-card p-5">
      {Icon && (
        <span className="mb-4 grid size-12 place-items-center rounded-xl bg-accent/10 text-accent">
          <Icon className="size-6" />
        </span>
      )}
      {label && <p className="text-sm uppercase tracking-widest text-muted">{label}</p>}
      <p className="mt-1 text-xl font-bold text-zinc-50">{title}</p>
      <div className="mt-3 text-base text-zinc-300 [&>p]:mt-0">{children}</div>
    </div>
  );
};
