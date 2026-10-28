import type { FormEvent, ReactNode } from "react";
import { GATE_STATES } from "@/shared/ui/exercise/exercise.constant";
import { ExerciseActions } from "@/shared/ui/exercise/ExerciseActions";

interface IExerciseCardProps {
  label: string;
  gate: boolean;
  answered: boolean;
  canCheck: boolean;
  onCheck: () => void;
  onSkip: () => void;
  children: ReactNode;
}

const toGateState = (gate: boolean, answered: boolean) => {
  if (!gate) return undefined;
  return answered ? GATE_STATES.open : GATE_STATES.locked;
};

export const ExerciseCard = ({ label, gate, answered, canCheck, onCheck, onSkip, children }: IExerciseCardProps) => {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (canCheck) onCheck();
  };

  return (
    <form
      onSubmit={submit}
      data-gate={toGateState(gate, answered)}
      className="mt-8 rounded-2xl bg-card p-6 text-base sm:p-7"
    >
      <p className="text-sm text-muted">{label}</p>
      <div className="mt-3">{children}</div>
      {!answered && <ExerciseActions canCheck={canCheck} gate={gate} onSkip={onSkip} />}
    </form>
  );
};
