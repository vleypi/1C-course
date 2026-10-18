import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";

interface ILockedModuleCardProps {
  locked: boolean;
  children: ReactNode;
}

export const LockedModuleCard = ({ locked, children }: ILockedModuleCardProps) => (
  <div
    aria-disabled={locked || undefined}
    className={joinClassNames("group h-full", locked && "cursor-not-allowed select-none")}
  >
    {children}
  </div>
);
