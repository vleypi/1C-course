import type { ReactNode } from "react";

interface IQuestionProps {
  title: string;
  children: ReactNode;
}

export const Question = ({ title, children }: IQuestionProps) => (
  <details className="group rounded-2xl bg-card p-5 open:ring-1 open:ring-accent/40">
    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-zinc-50 [&::-webkit-details-marker]:hidden">
      <span>{title}</span>
      <span className="mt-1 text-accent transition group-open:rotate-45" aria-hidden="true">+</span>
    </summary>
    <div className="mt-4 text-base text-zinc-300 [&>p]:mt-0">{children}</div>
  </details>
);
