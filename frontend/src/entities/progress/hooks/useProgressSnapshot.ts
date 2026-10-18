import { useSyncExternalStore } from "react";
import type { IProgressSnapshot } from "@/entities/progress/interfaces/progress.interface";
import { progressStore } from "@/entities/progress/services/progress.instance";

export const useProgressSnapshot = (): IProgressSnapshot =>
  useSyncExternalStore(progressStore.subscribe, progressStore.getSnapshot, progressStore.getServerSnapshot);
