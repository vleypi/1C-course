import type { ReactNode } from "react";

interface IChatProps {
  children: ReactNode;
}

export const Chat = ({ children }: IChatProps) => <div className="mt-8 space-y-5">{children}</div>;
