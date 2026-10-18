import courseData from "@/entities/course/generated/course.data.json";
import type { ICourse } from "@/entities/course/interfaces/course.interface";
import { CourseRepository } from "@/entities/course/services/course.repository";

export const courseRepository = new CourseRepository(courseData as ICourse);
