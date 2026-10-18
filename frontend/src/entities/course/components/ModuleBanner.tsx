import { joinClassNames } from "@/shared/lib";
import type { IModule } from "@/entities/course/interfaces/course.interface";
import { courseRepository } from "@/entities/course/services/course.instance";
import { getModuleMark } from "@/entities/course/utils/labels.util";
import { getModuleCoverPalette } from "@/entities/course/utils/module-cover.util";
import { DitherCover } from "@/entities/course/components/module-card/covers/DitherCover";

interface IModuleBannerProps {
  module: IModule;
  className?: string;
}

export const ModuleBanner = ({ module, className }: IModuleBannerProps) => {
  const seed = courseRepository.getModulePosition(module.slug);

  return (
    <div className={joinClassNames("overflow-hidden", className)} aria-hidden="true">
      <DitherCover mark={getModuleMark(module)} seed={seed} palette={getModuleCoverPalette(seed)} />
    </div>
  );
};
