import { UI_TEXT } from "@/shared/ui/constants/ui-text.constant";

const LINE_WIDTHS = ["w-1/3", "w-3/4", "w-full", "w-5/6", "w-2/3"];

export const ContentSkeleton = () => (
  <div className="animate-pulse space-y-5 py-10" aria-busy="true" aria-label={UI_TEXT.loading}>
    {LINE_WIDTHS.map((width) => (
      <div key={width} className={`h-6 rounded-lg bg-raise ${width}`} />
    ))}
  </div>
);
