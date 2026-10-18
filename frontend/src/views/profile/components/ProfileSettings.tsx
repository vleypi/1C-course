import type { ReactNode } from "react";
import { getModuleLessonIds, type IModule, MODULE_CARD_DESIGN_IDS, type ModuleCardDesign, ModuleCard } from "@/entities/course";
import { readAppearance } from "@/entities/course/server";
import { CompletionBar } from "@/entities/progress";
import { AvatarStylePicker, CardDesignPreview } from "@/features/select-appearance";
import { PREVIEW_SEED, PROFILE_PAGE_TEXT } from "@/views/profile/constants/profile-page.constant";
import { SettingsSection } from "@/views/profile/components/SettingsSection";

interface IProfileSettingsProps {
  previewModule: IModule;
}

const buildPreviews = (module: IModule) =>
  Object.fromEntries(
    MODULE_CARD_DESIGN_IDS.map((design) => [
      design,
      <ModuleCard
        key={design}
        module={module}
        coverSeed={PREVIEW_SEED}
        design={design}
        footer={<CompletionBar lessonIds={getModuleLessonIds(module)} />}
      />,
    ]),
  ) as Record<ModuleCardDesign, ReactNode>;

export const ProfileSettings = async ({ previewModule }: IProfileSettingsProps) => {
  const appearance = await readAppearance();

  return (
    <>
      <SettingsSection title={PROFILE_PAGE_TEXT.profile}>
        <AvatarStylePicker initial={appearance} />
      </SettingsSection>
      <SettingsSection title={PROFILE_PAGE_TEXT.cards}>
        <CardDesignPreview initial={appearance} previews={buildPreviews(previewModule)} />
      </SettingsSection>
    </>
  );
};
