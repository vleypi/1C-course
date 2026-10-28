"use client";

import { type ReactNode, use } from "react";
import { joinClassNames } from "@/shared/lib";
import { QUIZ_OPTION_STYLES } from "@/features/answer-quiz/constants/answer-quiz.constant";
import { QuizOptionContext } from "@/features/answer-quiz/constants/quiz-option.constant";
import { getQuizOptionStatus } from "@/features/answer-quiz/utils/quiz-selection.util";
import { QuizOptionFeedback } from "@/features/answer-quiz/components/QuizOptionFeedback";
import { QuizOptionMark } from "@/features/answer-quiz/components/QuizOptionMark";

interface IQuizOptionProps {
  correct?: boolean;
  explanation: string;
  children: ReactNode;
}

export const QuizOption = ({ correct = false, explanation, children }: IQuizOptionProps) => {
  const option = use(QuizOptionContext);
  const style = QUIZ_OPTION_STYLES[getQuizOptionStatus({ correct, ...option })];

  return (
    <label
      className={joinClassNames(
        "flex gap-4 rounded-xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
        style.optionClassName,
      )}
    >
      <input
        type={option.multiple ? "checkbox" : "radio"}
        name={option.groupName}
        value={option.value}
        checked={option.selected}
        onChange={() => option.onToggle(option.value)}
        className="sr-only"
      />
      <QuizOptionMark icon={style.markIcon} multiple={option.multiple} className={style.markClassName} />
      <span className="flex-1">
        <span className="text-zinc-50">{children}</span>
        {option.checked && (
          <QuizOptionFeedback
            caption={style.caption}
            captionClassName={style.captionClassName}
            explanation={explanation}
          />
        )}
      </span>
    </label>
  );
};
