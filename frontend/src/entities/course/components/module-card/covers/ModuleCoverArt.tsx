import { joinClassNames } from "@/shared/lib";
import type { IModule } from "@/entities/course/interfaces/course.interface";
import type { ModuleCoverKind } from "@/entities/course/interfaces/module-card-design.interface";
import { getModuleMark } from "@/entities/course/utils/labels.util";
import { getModuleCoverPalette } from "@/entities/course/utils/module-cover.util";
import { MODULE_COVERS } from "@/entities/course/components/module-card/covers/module-covers";

interface IModuleCoverArtProps {
  kind: ModuleCoverKind;
  module: IModule;
  seed: number;
  available: boolean;
}

export const ModuleCoverArt = ({ kind, module, seed, available }: IModuleCoverArtProps) => {
  const Cover = MODULE_COVERS[kind];

  return (
    <div
      className={joinClassNames(
        "size-full transition-transform duration-500 group-hover:scale-105",
        !available && "opacity-35",
      )}
    >
      <Cover mark={getModuleMark(module)} seed={seed} palette={getModuleCoverPalette(seed)} />
    </div>
  );
};
