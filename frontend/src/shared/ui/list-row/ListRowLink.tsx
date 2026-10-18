import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRightIcon } from "@/shared/ui/icons/icons";
import { ListRowLayout } from "@/shared/ui/list-row/ListRowLayout";

interface IListRowLinkProps {
  index: number;
  title: string;
  href: string;
  replace?: boolean;
  aside?: ReactNode;
}

export const ListRowLink = ({ index, title, href, replace, aside }: IListRowLinkProps) => (
  <Link
    href={href}
    replace={replace}
    className="group flex items-center gap-5 rounded-xl px-2 py-5 text-zinc-100 transition hover:bg-raise"
  >
    <ListRowLayout
      index={index}
      title={title}
      aside={
        <>
          {aside}
          <ChevronRightIcon className="size-4 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
        </>
      }
    />
  </Link>
);
