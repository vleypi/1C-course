import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";

interface IChoiceButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const ChoiceButton = ({ label, selected, onClick, children }: IChoiceButtonProps) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    aria-pressed={selected}
    onClick={onClick}
    className={joinClassNames(
      "rounded-full ring-offset-4 ring-offset-ink transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
      selected && "ring-2 ring-zinc-100",
    )}
  >
    {children}
  </button>
);
