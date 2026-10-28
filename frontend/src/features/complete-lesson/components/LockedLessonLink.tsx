import type { ReactNode } from "react";
import { LockIcon } from "@/shared/ui";
import { COMPLETE_LESSON_TEXT } from "@/features/complete-lesson/constants/complete-lesson.constant";

interface ILockedLessonLinkProps {
  children: ReactNode;
}

export const LockedLessonLink = ({ children }: ILockedLessonLinkProps) => (
  <div className="flex flex-col items-end gap-2">
    <span
      role="link"
      aria-disabled="true"
      className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-raise px-7 py-4 text-lg font-medium text-muted"
    >
      <LockIcon className="size-4" />
      {children}
    </span>
    <span className="text-sm text-muted">{COMPLETE_LESSON_TEXT.lockedHint}</span>
  </div>
);
