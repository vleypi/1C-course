import Link from "next/link";
import { ROUTES } from "@/shared/config";
import { COURSE_LEVELS, COURSE_TEXT } from "@/entities/course/constants/course.constant";
import type { ILessonLocation } from "@/entities/course/interfaces/location.interface";
import { formatPosition, getModuleLabel } from "@/entities/course/utils/labels.util";
import { getTopicHref } from "@/entities/course/utils/href.util";

interface ILessonBreadcrumbsProps {
  location: ILessonLocation;
}

const Separator = () => <span className="mx-1 text-muted" aria-hidden="true">→</span>;

export const LessonBreadcrumbs = ({ location }: ILessonBreadcrumbsProps) => {
  const { module, topic, topicNumber, lessonNumber } = location;

  return (
    <nav aria-label={COURSE_TEXT.breadcrumbsLabel} className="text-center text-sm text-zinc-300 sm:text-base">
      <Link href={ROUTES.module(module.slug)} className="transition hover:text-accent">
        {getModuleLabel(module)}
      </Link>
      <Separator />
      <Link href={getTopicHref(location)} className="transition hover:text-accent">
        {formatPosition(COURSE_LEVELS.topic, topicNumber, module.topics.length)}: {topic.title}
      </Link>
      <Separator />
      <span>{formatPosition(COURSE_LEVELS.lesson, lessonNumber, topic.lessons.length)}</span>
    </nav>
  );
};
