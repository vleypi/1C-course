"use client";

import { ProgressBar } from "@/shared/ui";
import { useCompletedCount } from "@/entities/progress/hooks/useCompletedCount";

interface ICompletionBarProps {
  lessonIds: readonly string[];
}

export const CompletionBar = ({ lessonIds }: ICompletionBarProps) => (
  <ProgressBar value={useCompletedCount(lessonIds)} max={lessonIds.length} />
);
