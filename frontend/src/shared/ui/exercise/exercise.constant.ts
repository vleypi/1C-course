export const EXERCISE_TEXT = {
  check: "Проверить",
  skip: "Не знаю",
  gateHint: "Ответьте, чтобы читать дальше",
} as const;

export const GATE_STATES = {
  locked: "locked",
  open: "open",
} as const;

export type VerdictTone = "success" | "failure" | "neutral";

interface IVerdictStyle {
  boxClassName: string;
  titleClassName: string;
}

export const VERDICT_STYLES: Record<VerdictTone, IVerdictStyle> = {
  success: {
    boxClassName: "bg-raise",
    titleClassName: "text-emerald-300",
  },
  failure: {
    boxClassName: "bg-raise",
    titleClassName: "text-red-300",
  },
  neutral: {
    boxClassName: "bg-raise",
    titleClassName: "text-zinc-50",
  },
};
