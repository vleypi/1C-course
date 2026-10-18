import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { IContentSource } from "#course/content.interface.mts";

const isMissingPath = (error: unknown): boolean =>
  error instanceof Error && "code" in error && error.code === "ENOENT";

export class ContentReader implements IContentSource {
  readonly #root: string;

  constructor(root: string) {
    this.#root = root;
  }

  async readJson<T>(...segments: string[]): Promise<T> {
    const raw = await readFile(this.#resolve(segments), "utf8");
    return JSON.parse(raw) as T;
  }

  async listEntries(prefix: string, ...segments: string[]): Promise<string[]> {
    try {
      const entries = await readdir(this.#resolve(segments));
      return entries.filter((name) => name.startsWith(prefix)).sort();
    } catch (error) {
      if (isMissingPath(error)) return [];
      throw error;
    }
  }

  #resolve(segments: string[]): string {
    return path.join(this.#root, ...segments);
  }
}
