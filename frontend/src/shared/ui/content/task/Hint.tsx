import type { ReactNode } from "react";
import { Disclosure } from "@/shared/ui/content/disclosure/Disclosure";
import { TASK_TEXT } from "@/shared/ui/content/task/task.constant";

interface IHintProps {
  title?: string;
  children: ReactNode;
}

export const Hint = ({ title = TASK_TEXT.hint, children }: IHintProps) => (
  <Disclosure summary={title} className="mt-5 rounded-xl bg-raise px-4 py-3">
    {children}
  </Disclosure>
);
