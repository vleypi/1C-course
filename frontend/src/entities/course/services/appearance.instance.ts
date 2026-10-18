import { PREFERENCE_COOKIE_MAX_AGE_SECONDS } from "@/shared/config";
import { writeCookie } from "@/shared/lib";
import { AppearanceStore } from "@/entities/course/services/appearance.store";

export const appearanceStore = new AppearanceStore({
  write: (key, value) => writeCookie(key, value, PREFERENCE_COOKIE_MAX_AGE_SECONDS),
});
