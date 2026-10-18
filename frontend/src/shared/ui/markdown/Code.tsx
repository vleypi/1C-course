import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & { "data-language"?: string };

export const Code = (props: CodeProps) =>
  props["data-language"] ? (
    <code {...props} />
  ) : (
    <code className="rounded bg-raise px-1.5 py-0.5 font-mono text-[0.9em] text-accent" {...props} />
  );
