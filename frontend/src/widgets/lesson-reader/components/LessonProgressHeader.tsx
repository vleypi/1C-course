import { getTopicLessonIds, type ILessonLocation, LessonBreadcrumbs } from "@/entities/course";
import { LessonSegments } from "@/entities/progress";

interface ILessonProgressHeaderProps {
  location: ILessonLocation;
}

export const LessonProgressHeader = ({ location }: ILessonProgressHeaderProps) => (
  <div className="space-y-4">
    <LessonBreadcrumbs location={location} />
    <LessonSegments lessonIds={getTopicLessonIds(location.topic)} currentLessonId={location.lesson.id} />
  </div>
);
