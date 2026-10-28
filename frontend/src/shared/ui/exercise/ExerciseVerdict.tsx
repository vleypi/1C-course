import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";
import { VERDICT_STYLES, type VerdictTone } from "@/shared/ui/exercise/exercise.constant";
import { CheckIcon, CloseIcon, LightbulbIcon } from "@/shared/ui/icons/icons";

const VERDICT_ICONS = {
  success: CheckIcon,
  failure: CloseIcon,
  neutral: LightbulbIcon,
} as const;

interface IExerciseVerdictProps {
  tone: VerdictTone;
  title: string;
  children?: ReactNode;
}

export const ExerciseVerdict = ({ tone, title, children }: IExerciseVerdictProps) => {
  const style = VERDICT_STYLES[tone];
  const Icon = VERDICT_ICONS[tone];

  return (
    <div role="status" className={joinClassNames("mt-5 animate-fade-in rounded-xl p-4", style.boxClassName)}>
      <p className={joinClassNames("flex items-center gap-2 font-semibold", style.titleClassName)}>
        <Icon className="size-4" />
        {title}
      </p>
      {children && <p className="mt-2 text-zinc-200">{children}</p>}
    </div>
  );
};
