import type { ReactNode } from "react";

interface IChoiceGroupProps {
  label: string;
  children: ReactNode;
}

export const ChoiceGroup = ({ label, children }: IChoiceGroupProps) => (
  <div role="group" aria-label={label}>
    <p className="text-sm text-muted">{label}</p>
    <div className="mt-3 flex flex-wrap gap-3">{children}</div>
  </div>
);
