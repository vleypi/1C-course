"use client";

import { SegmentedBar, type SegmentState } from "@/shared/ui";
import { useProgressSnapshot } from "@/entities/progress/hooks/useProgressSnapshot";
import { isLessonCompleted } from "@/entities/progress/utils/progress-queries.util";

interface ILessonSegmentsProps {
  lessonIds: readonly string[];
  currentLessonId: string;
}

export const LessonSegments = ({ lessonIds, currentLessonId }: ILessonSegmentsProps) => {
  const snapshot = useProgressSnapshot();
  const segments = lessonIds.map((lessonId): SegmentState => {
    if (isLessonCompleted(snapshot, lessonId)) return "done";
    return lessonId === currentLessonId ? "current" : "todo";
  });

  return <SegmentedBar segments={segments} />;
};
