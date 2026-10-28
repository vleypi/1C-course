"use client";

import { Children, isValidElement, type ReactNode, useId } from "react";
import { ExerciseCard } from "@/shared/ui";
import { QUIZ_TEXT } from "@/features/answer-quiz/constants/answer-quiz.constant";
import { QuizOptionContext } from "@/features/answer-quiz/constants/quiz-option.constant";
import { useQuizState } from "@/features/answer-quiz/hooks/useQuizState";

interface IQuizProps {
  id: string;
  question: string;
  multiple?: boolean;
  gate?: boolean;
  final?: boolean;
  children: ReactNode;
}

export const Quiz = ({ id, question, multiple = false, gate = false, final = false, children }: IQuizProps) => {
  const groupName = useId();
  const { selection, checked, canCheck, toggle, check, skip } = useQuizState(id, final, multiple);
  const options = Children.toArray(children).filter(isValidElement);

  return (
    <ExerciseCard label={QUIZ_TEXT.label} gate={gate} answered={checked} canCheck={canCheck} onCheck={check} onSkip={skip}>
      <fieldset disabled={checked}>
        <legend className="text-xl font-semibold text-zinc-50">{question}</legend>
        <p className="mt-1 text-sm text-muted">{multiple ? QUIZ_TEXT.multipleHint : QUIZ_TEXT.singleHint}</p>
        <div className="mt-5 space-y-3">
          {options.map((option, index) => (
            <QuizOptionContext
              key={option.key}
              value={{
                value: String(index),
                groupName,
                multiple,
                selected: selection.includes(String(index)),
                checked,
                onToggle: toggle,
              }}
            >
              {option}
            </QuizOptionContext>
          ))}
        </div>
      </fieldset>
    </ExerciseCard>
  );
};
