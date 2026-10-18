import { type ArtColor, COOKIE_KEYS } from "@/shared/config";
import type { AppearanceOverrides, IPreferenceWriter } from "@/entities/course/interfaces/appearance.interface";
import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";

type Listener = () => void;

const NO_OVERRIDES: AppearanceOverrides = Object.freeze({});

export class AppearanceStore {
  readonly #writer: IPreferenceWriter;
  readonly #listeners = new Set<Listener>();
  #overrides: AppearanceOverrides = NO_OVERRIDES;

  constructor(writer: IPreferenceWriter) {
    this.#writer = writer;
  }

  subscribe = (listener: Listener): (() => void) => {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  };

  getSnapshot = (): AppearanceOverrides => this.#overrides;

  getServerSnapshot = (): AppearanceOverrides => NO_OVERRIDES;

  setDesign = (design: ModuleCardDesign): void => {
    this.#writer.write(COOKIE_KEYS.moduleCardDesign, design);
    this.#update({ design });
  };

  setColor = (color: ArtColor): void => {
    this.#writer.write(COOKIE_KEYS.avatarColor, color);
    this.#update({ color });
  };

  #update(change: AppearanceOverrides): void {
    this.#overrides = { ...this.#overrides, ...change };
    this.#listeners.forEach((listener) => listener());
  }
}
