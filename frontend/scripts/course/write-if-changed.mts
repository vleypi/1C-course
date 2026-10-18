import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const readExisting = async (filePath: string): Promise<string | null> => {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return null;
  }
};

export const writeIfChanged = async (filePath: string, content: string): Promise<boolean> => {
  if ((await readExisting(filePath)) === content) return false;

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
  return true;
};
