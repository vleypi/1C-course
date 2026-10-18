import { courseRepository } from "@/entities/course";
import { Container } from "@/shared/ui";
import { AppHeader } from "@/widgets/app-header";
import { CourseOverview } from "@/widgets/course-overview";
import { ModuleGrid } from "@/widgets/module-grid";
import { COURSE_HOME_TEXT } from "@/views/course-home/constants/course-home.constant";

export const CourseHomePage = () => {
  const course = courseRepository.getCourse();

  return (
    <>
      <AppHeader />
      <main>
        <Container className="pb-24 pt-10">
          <CourseOverview course={course} />
          <ModuleGrid modules={course.modules} />
        </Container>
      </main>
      <footer className="border-t border-line/60">
        <Container className="py-8 text-sm text-muted">
          {COURSE_HOME_TEXT.footer}
        </Container>
      </footer>
    </>
  );
};
