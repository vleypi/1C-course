import type { ReactNode } from "react";
import { CALLOUT_STYLES, type CalloutVariant } from "@/shared/ui/content/callout/callout.constant";

interface ICalloutProps {
  variant: CalloutVariant;
  children: ReactNode;
}

export const Callout = ({ variant, children }: ICalloutProps) => {
  const { title, Icon } = CALLOUT_STYLES[variant];

  return (
    <aside className="mt-8 rounded-2xl bg-card p-6 text-zinc-300 [&>p]:mt-3">
      <p className="!mt-0 flex items-center gap-2 font-semibold text-zinc-50">
        <Icon className="size-5 text-accent" />
        {title}
      </p>
      {children}
    </aside>
  );
};
