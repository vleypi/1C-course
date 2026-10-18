import type { ReactNode } from "react";

interface ISelfCheckProps {
  children: ReactNode;
}

export const SelfCheck = ({ children }: ISelfCheckProps) => <div className="mt-6 space-y-3">{children}</div>;
