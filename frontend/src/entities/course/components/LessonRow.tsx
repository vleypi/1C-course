import type { ReactNode } from "react";
import { ListRowLink, ListRowLocked } from "@/shared/ui";
import type { ILessonLocation } from "@/entities/course/interfaces/location.interface";
import { isLessonAvailable } from "@/entities/course/utils/availability.util";
import { getLessonHref } from "@/entities/course/utils/href.util";

interface ILessonRowProps {
  location: ILessonLocation;
  aside?: ReactNode;
}

export const LessonRow = ({ location, aside }: ILessonRowProps) =>
  isLessonAvailable(location.lesson) ? (
    <ListRowLink
      index={location.lessonNumber}
      title={location.lesson.title}
      href={getLessonHref(location)}
      aside={aside}
    />
  ) : (
    <ListRowLocked index={location.lessonNumber} title={location.lesson.title} />
  );
