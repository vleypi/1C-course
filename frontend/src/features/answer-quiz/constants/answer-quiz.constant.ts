import type { QuizMarkIcon, QuizOptionStatus } from "@/features/answer-quiz/interfaces/quiz.interface";

export const QUIZ_TEXT = {
  label: "Вопрос",
  singleHint: "Выберите один ответ",
  multipleHint: "Выберите все подходящие ответы",
  correct: "Правильный ответ",
  wrong: "Неправильный ответ",
} as const;

interface IQuizOptionStyle {
  optionClassName: string;
  markClassName: string;
  markIcon: QuizMarkIcon;
  caption: string | null;
  captionClassName: string;
}

export const QUIZ_OPTION_STYLES: Record<QuizOptionStatus, IQuizOptionStyle> = {
  idle: {
    optionClassName: "cursor-pointer border-line hover:border-zinc-500",
    markClassName: "border-zinc-500",
    markIcon: null,
    caption: null,
    captionClassName: "",
  },
  selected: {
    optionClassName: "cursor-pointer border-zinc-300",
    markClassName: "border-zinc-100 bg-zinc-100 text-ink",
    markIcon: "dot",
    caption: null,
    captionClassName: "",
  },
  chosenCorrect: {
    optionClassName: "border-line",
    markClassName: "border-emerald-400 bg-emerald-400 text-ink",
    markIcon: "check",
    caption: QUIZ_TEXT.correct,
    captionClassName: "text-emerald-300",
  },
  missedCorrect: {
    optionClassName: "border-line",
    markClassName: "border-emerald-400 text-emerald-300",
    markIcon: "check",
    caption: QUIZ_TEXT.correct,
    captionClassName: "text-emerald-300",
  },
  chosenWrong: {
    optionClassName: "border-line",
    markClassName: "border-red-400 bg-red-400 text-ink",
    markIcon: "close",
    caption: QUIZ_TEXT.wrong,
    captionClassName: "text-red-300",
  },
  skipped: {
    optionClassName: "border-line",
    markClassName: "border-line",
    markIcon: null,
    caption: null,
    captionClassName: "",
  },
};
