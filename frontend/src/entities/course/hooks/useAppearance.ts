"use client";

import { useSyncExternalStore } from "react";
import type { IAppearance } from "@/entities/course/interfaces/appearance.interface";
import { appearanceStore } from "@/entities/course/services/appearance.instance";

export const useAppearance = (initial: IAppearance): IAppearance => {
  const overrides = useSyncExternalStore(
    appearanceStore.subscribe,
    appearanceStore.getSnapshot,
    appearanceStore.getServerSnapshot,
  );

  return { ...initial, ...overrides };
};
