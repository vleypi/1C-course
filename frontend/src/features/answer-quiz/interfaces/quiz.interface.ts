export type QuizOptionStatus = "idle" | "selected" | "chosenCorrect" | "missedCorrect" | "chosenWrong" | "skipped";

export type QuizMarkIcon = "dot" | "check" | "close" | null;

export interface IQuizOptionState {
  correct: boolean;
  selected: boolean;
  checked: boolean;
}

export interface IQuizOptionContext {
  value: string;
  groupName: string;
  multiple: boolean;
  selected: boolean;
  checked: boolean;
  onToggle: (value: string) => void;
}
