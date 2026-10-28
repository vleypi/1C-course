import { useState } from "react";
import { useExercise } from "@/entities/progress/client";
import { toggleSelection } from "@/features/answer-quiz/utils/quiz-selection.util";

export const useQuizState = (exerciseId: string, isFinal: boolean, multiple: boolean) => {
  const { response, answer } = useExercise(exerciseId, isFinal);
  const [draft, setDraft] = useState<readonly string[]>([]);

  return {
    selection: response ?? draft,
    checked: response !== null,
    canCheck: draft.length > 0,
    toggle: (value: string) => setDraft((current) => toggleSelection(current, value, multiple)),
    check: () => answer(draft),
    skip: () => answer([]),
  };
};
