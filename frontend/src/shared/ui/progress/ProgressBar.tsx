import { joinClassNames } from "@/shared/lib";

type ProgressBarSize = "sm" | "lg";

interface IProgressBarProps {
  value: number;
  max: number;
  size?: ProgressBarSize;
}

const TRACK_CLASSES: Record<ProgressBarSize, string> = {
  sm: "h-1 bg-line",
  lg: "h-3 bg-[repeating-linear-gradient(135deg,#34353a_0_6px,#2b2c30_6px_12px)]",
};

const FILL_CLASSES: Record<ProgressBarSize, string> = {
  sm: "bg-zinc-100",
  lg: "bg-emerald-500",
};

const toPercent = (value: number, max: number): number =>
  max === 0 ? 0 : Math.min(100, (value / max) * 100);

export const ProgressBar = ({ value, max, size = "sm" }: IProgressBarProps) => (
  <div
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={max}
    aria-valuenow={value}
    className={joinClassNames("w-full overflow-hidden rounded-full", TRACK_CLASSES[size])}
  >
    <div
      className={joinClassNames(
        "h-full rounded-full transition-[width]",
        value > 0 && "min-w-2",
        FILL_CLASSES[size],
      )}
      style={{ width: `${toPercent(value, max)}%` }}
    />
  </div>
);
