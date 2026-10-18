import type { ComponentProps } from "react";

export const Heading2 = (props: ComponentProps<"h2">) => (
  <h2 className="mt-16 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl" {...props} />
);

export const Heading3 = (props: ComponentProps<"h3">) => (
  <h3 className="mt-10 text-2xl font-semibold text-zinc-50" {...props} />
);

export const Paragraph = (props: ComponentProps<"p">) => <p className="mt-5" {...props} />;

export const Strong = (props: ComponentProps<"strong">) => (
  <strong className="font-semibold text-zinc-50" {...props} />
);

export const Anchor = (props: ComponentProps<"a">) => (
  <a className="text-accent underline-offset-4 hover:underline" {...props} />
);
