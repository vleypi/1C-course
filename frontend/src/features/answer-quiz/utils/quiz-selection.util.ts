import type { IQuizOptionState, QuizOptionStatus } from "@/features/answer-quiz/interfaces/quiz.interface";

export const toggleSelection = (
  selection: readonly string[],
  value: string,
  multiple: boolean,
): readonly string[] => {
  if (!multiple) return [value];
  return selection.includes(value) ? selection.filter((item) => item !== value) : [...selection, value];
};

export const getQuizOptionStatus = ({ correct, selected, checked }: IQuizOptionState): QuizOptionStatus => {
  if (!checked) return selected ? "selected" : "idle";
  if (correct) return selected ? "chosenCorrect" : "missedCorrect";
  return selected ? "chosenWrong" : "skipped";
};
