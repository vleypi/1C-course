import { joinClassNames } from "@/shared/lib";

export type SegmentState = "done" | "current" | "todo";

interface ISegmentedBarProps {
  segments: readonly SegmentState[];
}

const SEGMENT_CLASSES: Record<SegmentState, string> = {
  done: "bg-zinc-100",
  current: "bg-accent",
  todo: "bg-line",
};

export const SegmentedBar = ({ segments }: ISegmentedBarProps) => (
  <div className="mx-auto flex max-w-xl gap-1.5" aria-hidden="true">
    {segments.map((state, index) => (
      <span key={index} className={joinClassNames("h-1.5 flex-1 rounded-full", SEGMENT_CLASSES[state])} />
    ))}
  </div>
);
