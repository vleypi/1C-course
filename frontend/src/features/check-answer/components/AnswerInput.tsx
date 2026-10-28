"use client";

import { useId } from "react";
import { ExerciseCard } from "@/shared/ui";
import { ANSWER_TEXT } from "@/features/check-answer/constants/check-answer.constant";
import { useAnswerCheck } from "@/features/check-answer/hooks/useAnswerCheck";
import type { AcceptedAnswers } from "@/features/check-answer/interfaces/answer.interface";
import { AnswerVerdict } from "@/features/check-answer/components/AnswerVerdict";

interface IAnswerInputProps {
  id: string;
  question: string;
  answer: AcceptedAnswers;
  solution: string;
  success?: string;
  gate?: boolean;
  final?: boolean;
}

export const AnswerInput = ({ id, question, answer, solution, success, gate = false, final = false }: IAnswerInputProps) => {
  const inputId = useId();
  const { value, checked, skipped, correct, canCheck, change, check, skip } = useAnswerCheck(id, final, answer);

  return (
    <ExerciseCard label={ANSWER_TEXT.label} gate={gate} answered={checked} canCheck={canCheck} onCheck={check} onSkip={skip}>
      <label htmlFor={inputId} className="block text-xl font-semibold text-zinc-50">
        {question}
      </label>
      <input
        id={inputId}
        value={value}
        onChange={(event) => change(event.target.value)}
        disabled={checked}
        placeholder={ANSWER_TEXT.placeholder}
        autoComplete="off"
        className="mt-4 w-full rounded-xl border border-line bg-ink px-4 py-3 text-zinc-50 transition placeholder:text-muted focus:border-accent focus:outline-none disabled:text-zinc-300"
      />
      {checked && <AnswerVerdict skipped={skipped} correct={correct} success={success} solution={solution} />}
    </ExerciseCard>
  );
};
