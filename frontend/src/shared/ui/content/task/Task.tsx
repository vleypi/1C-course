import type { ReactNode } from "react";
import { TASK_TEXT } from "@/shared/ui/content/task/task.constant";
import { LightbulbIcon } from "@/shared/ui/icons/icons";

interface ITaskProps {
  title?: string;
  children: ReactNode;
}

export const Task = ({ title, children }: ITaskProps) => (
  <aside className="mt-8 rounded-2xl bg-card p-6 text-zinc-300 [&>p]:mt-3">
    <p className="!mt-0 flex items-center gap-2 font-semibold text-zinc-50">
      <LightbulbIcon className="size-5 text-accent" />
      {TASK_TEXT.label}
    </p>
    {title && <p className="text-lg text-zinc-100">{title}</p>}
    {children}
  </aside>
);
