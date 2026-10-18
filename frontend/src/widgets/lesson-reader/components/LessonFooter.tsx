import { getLessonHref, getTopicHref, type ILessonLocation, isLessonAvailable } from "@/entities/course";
import { CompleteLessonLink } from "@/features/complete-lesson";
import { LESSON_READER_TEXT } from "@/widgets/lesson-reader/constants/lesson-reader.constant";
import { NextLessonPreview } from "@/widgets/lesson-reader/components/NextLessonPreview";

interface ILessonFooterProps {
  location: ILessonLocation;
  nextLocation: ILessonLocation | null;
}

export const LessonFooter = ({ location, nextLocation }: ILessonFooterProps) => {
  const nextAvailable = nextLocation !== null && isLessonAvailable(nextLocation.lesson);

  return (
    <footer className="mt-16 space-y-8 animate-fade-in">
      {nextLocation && <NextLessonPreview nextLocation={nextLocation} available={nextAvailable} />}
      <div className="flex justify-end">
        <CompleteLessonLink
          lessonId={location.lesson.id}
          href={nextAvailable ? getLessonHref(nextLocation) : getTopicHref(location)}
        >
          {nextAvailable ? LESSON_READER_TEXT.goToNextLesson : LESSON_READER_TEXT.completeLesson}
        </CompleteLessonLink>
      </div>
    </footer>
  );
};
