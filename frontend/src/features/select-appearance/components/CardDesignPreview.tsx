"use client";

import type { ReactNode } from "react";
import type { IAppearance, ModuleCardDesign } from "@/entities/course";
import { useAppearance } from "@/entities/course/client";
import {
  SELECT_APPEARANCE_TEXT,
  MODULE_CARD_DESIGN_NAMES,
} from "@/features/select-appearance/constants/select-appearance.constant";

interface ICardDesignPreviewProps {
  initial: IAppearance;
  previews: Record<ModuleCardDesign, ReactNode>;
}

export const CardDesignPreview = ({ initial, previews }: ICardDesignPreviewProps) => {
  const { design } = useAppearance(initial);

  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
      <div className="w-full shrink-0 sm:w-72">{previews[design]}</div>
      <div>
        <h3 className="font-semibold">{MODULE_CARD_DESIGN_NAMES[design]}</h3>
        <p className="mt-1 text-sm text-muted">{SELECT_APPEARANCE_TEXT.preview}</p>
      </div>
    </div>
  );
};
