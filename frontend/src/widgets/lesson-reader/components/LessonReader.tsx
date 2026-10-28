import { type ILessonLocation, type ILessonStep, ModuleBanner, ModuleTheme } from "@/entities/course";
import { ExerciseScopeProvider } from "@/entities/progress";
import { LessonSteps } from "@/features/reveal-lesson-step";
import { LessonFooter } from "@/widgets/lesson-reader/components/LessonFooter";
import { LessonProgressHeader } from "@/widgets/lesson-reader/components/LessonProgressHeader";

interface ILessonReaderProps {
  location: ILessonLocation;
  steps: readonly ILessonStep[];
  nextLocation: ILessonLocation | null;
}

export const LessonReader = ({ location, steps, nextLocation }: ILessonReaderProps) => (
  <ModuleTheme module={location.module} className="pb-24 pt-10">
    <LessonProgressHeader location={location} />
    <ModuleBanner module={location.module} className="mt-10 h-32 rounded-2xl sm:h-40" />
    <article className="mt-12 text-lg leading-relaxed text-zinc-200">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-6xl">{location.lesson.title}</h1>
      <ExerciseScopeProvider lessonId={location.lesson.id}>
        <LessonSteps
          lessonId={location.lesson.id}
          steps={steps.map(({ Content }, index) => <Content key={index} />)}
          asks={steps.map(({ ask }) => ask)}
          footer={<LessonFooter location={location} nextLocation={nextLocation} />}
        />
      </ExerciseScopeProvider>
    </article>
  </ModuleTheme>
);
