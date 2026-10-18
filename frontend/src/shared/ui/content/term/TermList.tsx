import type { ReactNode } from "react";

interface ITermListProps {
  children: ReactNode;
}

export const TermList = ({ children }: ITermListProps) => <dl className="mt-6 space-y-6">{children}</dl>;
