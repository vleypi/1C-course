import { ExerciseVerdict } from "@/shared/ui";
import { ANSWER_TEXT } from "@/features/check-answer/constants/check-answer.constant";

interface IAnswerVerdictProps {
  skipped: boolean;
  correct: boolean;
  success?: string;
  solution: string;
}

export const AnswerVerdict = ({ skipped, correct, success, solution }: IAnswerVerdictProps) => {
  if (skipped) {
    return (
      <ExerciseVerdict tone="neutral" title={ANSWER_TEXT.skipped}>
        {solution}
      </ExerciseVerdict>
    );
  }

  return correct ? (
    <ExerciseVerdict tone="success" title={ANSWER_TEXT.correct}>
      {success}
    </ExerciseVerdict>
  ) : (
    <ExerciseVerdict tone="failure" title={ANSWER_TEXT.wrong}>
      {solution}
    </ExerciseVerdict>
  );
};
