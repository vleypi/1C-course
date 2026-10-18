import { STORAGE_KEYS } from "@/shared/config";
import { LocalProgressStorage } from "@/entities/progress/services/local-progress.storage";
import { ProgressStore } from "@/entities/progress/services/progress.store";

export const progressStore = new ProgressStore(new LocalProgressStorage(STORAGE_KEYS.progress));
