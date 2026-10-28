import { joinClassNames } from "@/shared/lib";
import { CheckIcon, CloseIcon } from "@/shared/ui";
import type { QuizMarkIcon } from "@/features/answer-quiz/interfaces/quiz.interface";

interface IQuizOptionMarkProps {
  icon: QuizMarkIcon;
  multiple: boolean;
  className: string;
}

const MarkIcon = ({ icon }: Pick<IQuizOptionMarkProps, "icon">) => {
  if (icon === "check") return <CheckIcon className="size-3.5" />;
  if (icon === "close") return <CloseIcon className="size-3.5" />;
  if (icon === "dot") return <span className="size-2 rounded-full bg-current" />;
  return null;
};

export const QuizOptionMark = ({ icon, multiple, className }: IQuizOptionMarkProps) => (
  <span
    className={joinClassNames(
      "mt-0.5 grid size-6 shrink-0 place-items-center border-2 transition",
      multiple ? "rounded-md" : "rounded-full",
      className,
    )}
    aria-hidden="true"
  >
    <MarkIcon icon={multiple && icon === "dot" ? "check" : icon} />
  </span>
);
