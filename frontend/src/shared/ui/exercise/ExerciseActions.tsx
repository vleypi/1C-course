import { EXERCISE_TEXT } from "@/shared/ui/exercise/exercise.constant";

interface IExerciseActionsProps {
  canCheck: boolean;
  gate: boolean;
  onSkip: () => void;
}

export const ExerciseActions = ({ canCheck, gate, onSkip }: IExerciseActionsProps) => (
  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
    <button
      type="submit"
      disabled={!canCheck}
      className="cursor-pointer rounded-xl bg-zinc-100 px-6 py-3 text-base font-medium text-ink transition hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:bg-raise disabled:text-muted"
    >
      {EXERCISE_TEXT.check}
    </button>
    <button
      type="button"
      onClick={onSkip}
      className="cursor-pointer rounded-xl px-5 py-3 text-base text-muted transition hover:bg-raise hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {EXERCISE_TEXT.skip}
    </button>
    {gate && <span className="ml-2 text-sm text-muted">{EXERCISE_TEXT.gateHint}</span>}
  </div>
);
