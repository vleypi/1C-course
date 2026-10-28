"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useHasUnansweredFinalExercise } from "@/entities/progress/client";
import { useCompleteLesson } from "@/features/complete-lesson/hooks/useCompleteLesson";
import { LockedLessonLink } from "@/features/complete-lesson/components/LockedLessonLink";

interface ICompleteLessonLinkProps {
  lessonId: string;
  href: string;
  children: ReactNode;
}

export const CompleteLessonLink = ({ lessonId, href, children }: ICompleteLessonLinkProps) => {
  const completeLesson = useCompleteLesson(lessonId);
  const locked = useHasUnansweredFinalExercise();

  if (locked) return <LockedLessonLink>{children}</LockedLessonLink>;

  return (
    <Link
      href={href}
      onClick={completeLesson}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-100 px-7 py-4 text-lg font-medium text-ink transition hover:bg-accent"
    >
      {children}
    </Link>
  );
};
