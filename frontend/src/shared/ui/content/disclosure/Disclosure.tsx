import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";
import { ChevronRightIcon } from "@/shared/ui/icons/icons";

interface IDisclosureProps {
  summary: string;
  className: string;
  children: ReactNode;
}

export const Disclosure = ({ summary, className, children }: IDisclosureProps) => (
  <details className={joinClassNames("text-base", className)}>
    <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold text-zinc-50 [&::-webkit-details-marker]:hidden">
      <ChevronRightIcon className="size-4 text-accent transition [details[open]>summary>&]:rotate-90" />
      {summary}
    </summary>
    <div className="mt-3 text-zinc-300 [&>*:first-child]:mt-0">{children}</div>
  </details>
);
