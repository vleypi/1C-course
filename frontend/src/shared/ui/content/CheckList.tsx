import type { ReactNode } from "react";

interface ICheckListProps {
  children: ReactNode;
}

export const CheckList = ({ children }: ICheckListProps) => (
  <div className="[&_li]:relative [&_li]:pl-7 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-emerald-400 [&_li]:before:content-['✓'] [&_ul]:mt-6 [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0">
    {children}
  </div>
);
