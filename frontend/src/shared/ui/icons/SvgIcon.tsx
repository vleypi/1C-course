import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";

export interface IIconProps {
  className?: string;
}

interface ISvgIconProps extends IIconProps {
  children: ReactNode;
}

export const SvgIcon = ({ className, children }: ISvgIconProps) => (
  <svg
    className={joinClassNames("size-5 shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);
