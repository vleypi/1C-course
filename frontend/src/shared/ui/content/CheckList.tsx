import type { ReactNode } from "react";

interface ICheckListProps {
  children: ReactNode;
}

export const CheckList = ({ children }: ICheckListProps) => (
  <div className="[&_li]:flex [&_li]:gap-3 [&_li]:before:text-emerald-400 [&_li]:before:content-['✓'] [&_ul]:mt-6 [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0">
    {children}
  </div>
);
