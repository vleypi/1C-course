import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";

type ContainerWidth = "wide" | "narrow";

interface IContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}

const WIDTH_CLASSES: Record<ContainerWidth, string> = {
  wide: "max-w-[66rem]",
  narrow: "max-w-3xl",
};

export const Container = ({ children, width = "wide", className }: IContainerProps) => (
  <div className={joinClassNames("mx-auto w-full px-4 sm:px-6", WIDTH_CLASSES[width], className)}>
    {children}
  </div>
);
