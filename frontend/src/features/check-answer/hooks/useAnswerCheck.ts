import { useState } from "react";
import { useExercise } from "@/entities/progress/client";
import type { AcceptedAnswers } from "@/features/check-answer/interfaces/answer.interface";
import { isAnswerAccepted } from "@/features/check-answer/utils/answer-matching.util";

export const useAnswerCheck = (exerciseId: string, isFinal: boolean, accepted: AcceptedAnswers) => {
  const { response, answer } = useExercise(exerciseId, isFinal);
  const [draft, setDraft] = useState("");
  const submitted = response?.[0] ?? null;

  return {
    value: response === null ? draft : (submitted ?? ""),
    checked: response !== null,
    skipped: response !== null && submitted === null,
    correct: submitted !== null && isAnswerAccepted(submitted, accepted),
    canCheck: draft.trim() !== "",
    change: setDraft,
    check: () => answer([draft.trim()]),
    skip: () => answer([]),
  };
};
