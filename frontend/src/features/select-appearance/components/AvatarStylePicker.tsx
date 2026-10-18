"use client";

import { DesignAvatar, type IAppearance, MODULE_CARD_DESIGN_IDS } from "@/entities/course";
import { appearanceStore, useAppearance } from "@/entities/course/client";
import { ART_COLORS } from "@/shared/config";
import {
  ART_COLOR_NAMES,
  SELECT_APPEARANCE_TEXT,
  MODULE_CARD_DESIGN_NAMES,
} from "@/features/select-appearance/constants/select-appearance.constant";
import { ChoiceButton } from "@/features/select-appearance/components/ChoiceButton";
import { ChoiceGroup } from "@/features/select-appearance/components/ChoiceGroup";
import { ColorSwatch } from "@/features/select-appearance/components/ColorSwatch";

interface IAvatarStylePickerProps {
  initial: IAppearance;
}

export const AvatarStylePicker = ({ initial }: IAvatarStylePickerProps) => {
  const { design, color } = useAppearance(initial);

  return (
    <div>
      <h3 className="font-semibold">{SELECT_APPEARANCE_TEXT.avatar}</h3>
      <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
        <DesignAvatar design={design} color={color} size="lg" />
        <div className="space-y-6">
          <ChoiceGroup label={SELECT_APPEARANCE_TEXT.style}>
            {MODULE_CARD_DESIGN_IDS.map((option) => (
              <ChoiceButton
                key={option}
                label={MODULE_CARD_DESIGN_NAMES[option]}
                selected={option === design}
                onClick={() => appearanceStore.setDesign(option)}
              >
                <DesignAvatar design={option} color={color} size="md" />
              </ChoiceButton>
            ))}
          </ChoiceGroup>
          <ChoiceGroup label={SELECT_APPEARANCE_TEXT.color}>
            {ART_COLORS.map((option) => (
              <ChoiceButton
                key={option}
                label={ART_COLOR_NAMES[option]}
                selected={option === color}
                onClick={() => appearanceStore.setColor(option)}
              >
                <ColorSwatch color={option} />
              </ChoiceButton>
            ))}
          </ChoiceGroup>
        </div>
      </div>
    </div>
  );
};
