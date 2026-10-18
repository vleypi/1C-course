import { AppearanceAvatar } from "@/entities/course/client";
import { readAppearance } from "@/entities/course/server";

export const HeaderAvatar = async () => <AppearanceAvatar initial={await readAppearance()} size="sm" />;
