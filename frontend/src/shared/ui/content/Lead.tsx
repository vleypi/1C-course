import type { ReactNode } from "react";

interface ILeadProps {
  children: ReactNode;
}

export const Lead = ({ children }: ILeadProps) => (
  <div className="mt-6 text-xl text-zinc-300 [&>p]:mt-0">{children}</div>
);
