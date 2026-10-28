import type { ReactNode } from "react";
import { Disclosure } from "@/shared/ui/content/disclosure/Disclosure";

interface ISpoilerProps {
  title: string;
  children: ReactNode;
}

export const Spoiler = ({ title, children }: ISpoilerProps) => (
  <Disclosure summary={title} className="mt-8 rounded-2xl bg-card px-5 py-4">
    {children}
  </Disclosure>
);
