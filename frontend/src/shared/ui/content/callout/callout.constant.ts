import type { ComponentType } from "react";
import { AlertIcon, BookmarkIcon, LightbulbIcon } from "@/shared/ui/icons/icons";
import type { IIconProps } from "@/shared/ui/icons/SvgIcon";

export type CalloutVariant = "fingers" | "remember" | "important";

interface ICalloutStyle {
  title: string;
  Icon: ComponentType<IIconProps>;
}

export const CALLOUT_STYLES: Record<CalloutVariant, ICalloutStyle> = {
  fingers: { title: "На пальцах", Icon: LightbulbIcon },
  remember: { title: "Запомните", Icon: BookmarkIcon },
  important: { title: "Важно", Icon: AlertIcon },
};
