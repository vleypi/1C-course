import type { MDXComponents } from "mdx/types";
import * as content from "@/shared/ui/content";
import {
  Anchor,
  Code,
  Heading2,
  Heading3,
  ListItem,
  OrderedList,
  Paragraph,
  Strong,
  Table,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  UnorderedList,
} from "@/shared/ui/markdown";

const components = {
  ...content,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  strong: Strong,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: Code,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  th: TableHeaderCell,
  td: TableCell,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
