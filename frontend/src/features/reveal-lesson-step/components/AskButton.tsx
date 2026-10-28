import { ArrowDownIcon } from "@/shared/ui";
import { ASK_HINT, ASKER_LABEL } from "@/features/reveal-lesson-step/constants/reveal-step.constant";

interface IAskButtonProps {
  question: string;
  onAsk: () => void;
}

export const AskButton = ({ question, onAsk }: IAskButtonProps) => (
  <div className="mt-12 flex flex-col items-end gap-2">
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onAsk}
        className="group flex cursor-pointer items-center gap-4 rounded-3xl rounded-br-md bg-accent py-3 pl-5 pr-3 text-left text-lg text-ink shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-0"
      >
        {question}
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink/10 transition group-hover:translate-y-0.5 group-hover:bg-ink/15">
          <ArrowDownIcon className="size-4" />
        </span>
      </button>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent font-semibold text-ink" aria-hidden="true">
        {ASKER_LABEL}
      </span>
    </div>
    <span className="pr-14 text-sm text-muted">{ASK_HINT}</span>
  </div>
);
