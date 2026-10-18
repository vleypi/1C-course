import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";
import { CALLOUT_STYLES, type CalloutVariant } from "@/shared/ui/content/callout/callout.constant";

interface ICalloutProps {
  variant: CalloutVariant;
  children: ReactNode;
}

export const Callout = ({ variant, children }: ICalloutProps) => {
  const style = CALLOUT_STYLES[variant];

  return (
    <aside className={joinClassNames("mt-8 rounded-2xl border p-6 [&>p]:mt-3", style.boxClassName)}>
      <p className={joinClassNames("!mt-0 text-sm font-bold uppercase tracking-widest", style.titleClassName)}>
        {style.title}
      </p>
      {children}
    </aside>
  );
};
