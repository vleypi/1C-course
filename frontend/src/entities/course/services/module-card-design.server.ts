import { cookies } from "next/headers";
import { COOKIE_KEYS } from "@/shared/config";
import type { IAppearance } from "@/entities/course/interfaces/appearance.interface";
import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";
import { toArtColor } from "@/entities/course/utils/appearance.util";
import { toModuleCardDesign } from "@/entities/course/utils/module-card-design.util";

export const readModuleCardDesign = async (): Promise<ModuleCardDesign> => {
  const cookieStore = await cookies();
  return toModuleCardDesign(cookieStore.get(COOKIE_KEYS.moduleCardDesign)?.value);
};

export const readAppearance = async (): Promise<IAppearance> => {
  const cookieStore = await cookies();
  return {
    design: toModuleCardDesign(cookieStore.get(COOKIE_KEYS.moduleCardDesign)?.value),
    color: toArtColor(cookieStore.get(COOKIE_KEYS.avatarColor)?.value),
  };
};
