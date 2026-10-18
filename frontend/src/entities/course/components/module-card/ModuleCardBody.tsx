import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";

interface IModuleCardBodyProps {
  title: string;
  available: boolean;
  footer?: ReactNode;
}

export const ModuleCardBody = ({ title, available, footer }: IModuleCardBodyProps) => (
  <div className="flex flex-1 flex-col gap-4 p-5">
    <h3 className={joinClassNames("text-lg font-medium leading-snug", !available && "text-zinc-500")}>{title}</h3>
    {footer && <div className="mt-auto">{footer}</div>}
  </div>
);
