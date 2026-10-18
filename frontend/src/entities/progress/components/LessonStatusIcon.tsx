"use client";

import { CheckIcon, ProgressIcon } from "@/shared/ui";
import { useLessonStatus } from "@/entities/progress/hooks/useLessonStatus";

interface ILessonStatusIconProps {
  lessonId: string;
}

export const LessonStatusIcon = ({ lessonId }: ILessonStatusIconProps) => {
  const status = useLessonStatus(lessonId);

  if (status === "completed") return <CheckIcon className="size-4 text-zinc-100" />;
  if (status === "started") return <ProgressIcon className="size-4 text-muted" />;
  return null;
};
