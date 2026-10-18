import { ASKER_LABEL } from "@/features/reveal-lesson-step/constants/reveal-step.constant";

interface IAskButtonProps {
  question: string;
  onAsk: () => void;
}

export const AskButton = ({ question, onAsk }: IAskButtonProps) => (
  <div className="mt-12 flex flex-col items-end gap-2">
    <span className="pr-14 text-sm text-muted">{ASKER_LABEL}</span>
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onAsk}
        className="rounded-3xl rounded-br-md bg-accent px-5 py-3 text-left text-lg text-ink shadow-lg transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {question}
      </button>
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent font-semibold text-ink" aria-hidden="true">
        {ASKER_LABEL}
      </span>
    </div>
  </div>
);
