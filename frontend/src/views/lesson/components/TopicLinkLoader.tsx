import { getTopicHref } from "@/entities/course";
import type { ILessonRouteParams, IRouteParamsProps } from "@/shared/config";
import { HeaderLink } from "@/widgets/app-header";
import { LESSON_VIEW_TEXT } from "@/views/lesson/constants/lesson-view.constant";
import { resolveLesson } from "@/views/lesson/utils/resolve-lesson";

export const TopicLinkLoader = async ({ params }: IRouteParamsProps<ILessonRouteParams>) => (
  <HeaderLink href={getTopicHref(resolveLesson(await params))}>{LESSON_VIEW_TEXT.topicLessons}</HeaderLink>
);
