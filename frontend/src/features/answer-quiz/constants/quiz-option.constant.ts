import { createContext } from "react";
import type { IQuizOptionContext } from "@/features/answer-quiz/interfaces/quiz.interface";

const DETACHED_QUIZ_OPTION: IQuizOptionContext = Object.freeze({
  value: "",
  groupName: "",
  multiple: false,
  selected: false,
  checked: false,
  onToggle: () => undefined,
});

export const QuizOptionContext = createContext<IQuizOptionContext>(DETACHED_QUIZ_OPTION);
