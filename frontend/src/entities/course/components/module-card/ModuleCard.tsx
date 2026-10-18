import type { ReactNode } from "react";
import { MODULE_CARD_DESIGNS } from "@/entities/course/constants/module-card-design.constant";
import type { IModule } from "@/entities/course/interfaces/course.interface";
import type { ModuleCardDesign } from "@/entities/course/interfaces/module-card-design.interface";
import { isModuleAvailable } from "@/entities/course/utils/availability.util";
import { AvailableModuleCard } from "@/entities/course/components/module-card/AvailableModuleCard";
import { LockedModuleCard } from "@/entities/course/components/module-card/LockedModuleCard";
import { ModuleCoverArt } from "@/entities/course/components/module-card/covers/ModuleCoverArt";
import { MODULE_CARD_LAYOUTS } from "@/entities/course/components/module-card/layouts/module-card-layouts";

interface IModuleCardProps {
  module: IModule;
  coverSeed: number;
  design: ModuleCardDesign;
  href?: string;
  footer?: ReactNode;
}

export const ModuleCard = ({ module, coverSeed, design, href, footer }: IModuleCardProps) => {
  const available = isModuleAvailable(module);
  const { layout, cover } = MODULE_CARD_DESIGNS[design];
  const Layout = MODULE_CARD_LAYOUTS[layout];
  const card = (
    <Layout
      module={module}
      available={available}
      cover={<ModuleCoverArt kind={cover} module={module} seed={coverSeed} available={available} />}
      footer={footer}
    />
  );

  return available && href ? (
    <AvailableModuleCard href={href}>{card}</AvailableModuleCard>
  ) : (
    <LockedModuleCard locked={!available}>{card}</LockedModuleCard>
  );
};
