"use client";

import { ProgressBar } from "@/shared/ui";
import { PROGRESS_TEXT } from "@/entities/progress/constants/progress.constant";
import { useCompletedTotal } from "@/entities/progress/hooks/useCompletedTotal";

interface ICourseCompletionProps {
  totalLessons: number;
}

export const CourseCompletion = ({ totalLessons }: ICourseCompletionProps) => (
  <div>
    <ProgressBar value={useCompletedTotal()} max={totalLessons} size="lg" />
    <p className="mt-3 text-sm text-muted">{PROGRESS_TEXT.courseProgress}</p>
  </div>
);
