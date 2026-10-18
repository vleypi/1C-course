import type { ICourse } from "@/entities/course";
import { CourseCompletion } from "@/entities/progress";

interface ICourseOverviewProps {
  course: ICourse;
}

export const CourseOverview = ({ course }: ICourseOverviewProps) => (
  <section className="rounded-2xl bg-card p-6 sm:p-7">
    <h1 className="text-3xl font-medium leading-tight tracking-tight text-zinc-200 sm:text-4xl">
      {course.title}:
      <br />
      {course.subtitle}
    </h1>
    <div className="mt-10">
      <CourseCompletion totalLessons={course.totalLessons} />
    </div>
  </section>
);
