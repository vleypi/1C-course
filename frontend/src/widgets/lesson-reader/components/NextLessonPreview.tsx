import type { ILessonLocation } from "@/entities/course";
import { LESSON_READER_TEXT } from "@/widgets/lesson-reader/constants/lesson-reader.constant";

interface INextLessonPreviewProps {
  nextLocation: ILessonLocation;
  available: boolean;
}

export const NextLessonPreview = ({ nextLocation, available }: INextLessonPreviewProps) => (
  <div className="rounded-2xl bg-card p-6">
    <p className="text-sm uppercase tracking-widest text-muted">
      {available ? LESSON_READER_TEXT.nextLesson : LESSON_READER_TEXT.nextLessonSoon}
    </p>
    <p className="mt-2 text-xl font-semibold text-zinc-50">{nextLocation.lesson.title}</p>
  </div>
);
