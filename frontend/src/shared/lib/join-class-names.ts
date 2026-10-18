type ClassNamePart = string | false | null | undefined;

export const joinClassNames = (...parts: ClassNamePart[]): string =>
  parts.filter(Boolean).join(" ");
