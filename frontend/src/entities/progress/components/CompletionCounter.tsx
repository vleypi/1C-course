"use client";

import { useCompletedCount } from "@/entities/progress/hooks/useCompletedCount";

interface ICompletionCounterProps {
  lessonIds: readonly string[];
}

export const CompletionCounter = ({ lessonIds }: ICompletionCounterProps) => {
  const completed = useCompletedCount(lessonIds);

  return (
    <span className="hidden text-sm tabular-nums text-muted sm:inline">
      {completed}/{lessonIds.length}
    </span>
  );
};
