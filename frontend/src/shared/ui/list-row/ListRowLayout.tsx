import type { ReactNode } from "react";

interface IListRowLayoutProps {
  index: number;
  title: string;
  aside: ReactNode;
}

export const ListRowLayout = ({ index, title, aside }: IListRowLayoutProps) => (
  <>
    <span className="w-8 shrink-0 text-right text-xl tabular-nums">{index}.</span>
    <span className="flex-1 text-lg sm:text-xl">{title}</span>
    {aside}
  </>
);
