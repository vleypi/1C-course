export type CalloutVariant = "fingers" | "remember" | "important";

interface ICalloutStyle {
  title: string;
  boxClassName: string;
  titleClassName: string;
}

export const CALLOUT_STYLES: Record<CalloutVariant, ICalloutStyle> = {
  fingers: {
    title: "На пальцах",
    boxClassName: "border-accent/30 bg-accent/10",
    titleClassName: "text-accent",
  },
  remember: {
    title: "Запомни",
    boxClassName: "border-emerald-400/30 bg-emerald-400/10",
    titleClassName: "text-emerald-300",
  },
  important: {
    title: "Важно",
    boxClassName: "border-sky-400/30 bg-sky-400/10",
    titleClassName: "text-sky-300",
  },
};
