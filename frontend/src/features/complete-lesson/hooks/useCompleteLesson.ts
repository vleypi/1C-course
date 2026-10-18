import { progressStore } from "@/entities/progress";

export const useCompleteLesson = (lessonId: string) => () => progressStore.completeLesson(lessonId);
