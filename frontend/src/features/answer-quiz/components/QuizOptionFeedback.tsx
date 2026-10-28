import { joinClassNames } from "@/shared/lib";

interface IQuizOptionFeedbackProps {
  caption: string | null;
  captionClassName: string;
  explanation: string;
}

export const QuizOptionFeedback = ({ caption, captionClassName, explanation }: IQuizOptionFeedbackProps) => (
  <span className="mt-2 block animate-fade-in text-sm">
    {caption && <span className={joinClassNames("block font-semibold", captionClassName)}>{caption}</span>}
    <span className="mt-1 block text-zinc-300">{explanation}</span>
  </span>
);
