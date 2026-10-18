"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useCompleteLesson } from "@/features/complete-lesson/hooks/useCompleteLesson";

interface ICompleteLessonLinkProps {
  lessonId: string;
  href: string;
  children: ReactNode;
}

export const CompleteLessonLink = ({ lessonId, href, children }: ICompleteLessonLinkProps) => (
  <Link
    href={href}
    onClick={useCompleteLesson(lessonId)}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-7 py-4 text-lg font-medium text-ink transition hover:bg-accent"
  >
    {children}
  </Link>
);
