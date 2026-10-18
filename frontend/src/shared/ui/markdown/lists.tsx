import type { ComponentProps } from "react";

export const UnorderedList = (props: ComponentProps<"ul">) => (
  <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-accent" {...props} />
);

export const OrderedList = (props: ComponentProps<"ol">) => (
  <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-mono marker:text-accent" {...props} />
);

export const ListItem = (props: ComponentProps<"li">) => <li className="pl-1" {...props} />;
