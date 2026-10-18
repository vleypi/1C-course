import type { ComponentType } from "react";
import type { ModuleCoverKind } from "@/entities/course/interfaces/module-card-design.interface";
import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { BigNumberCover } from "@/entities/course/components/module-card/covers/BigNumberCover";
import { DitherCover } from "@/entities/course/components/module-card/covers/DitherCover";
import { DotNumberCover } from "@/entities/course/components/module-card/covers/DotNumberCover";
import { DotsCover } from "@/entities/course/components/module-card/covers/DotsCover";
import { GeometryCover } from "@/entities/course/components/module-card/covers/GeometryCover";
import { StripesCover } from "@/entities/course/components/module-card/covers/StripesCover";
import { SubjectCover } from "@/entities/course/components/module-card/covers/SubjectCover";

export const MODULE_COVERS: Record<ModuleCoverKind, ComponentType<ICoverArtProps>> = {
  dither: DitherCover,
  geometry: GeometryCover,
  dotNumber: DotNumberCover,
  dots: DotsCover,
  bigNumber: BigNumberCover,
  stripes: StripesCover,
  subject: SubjectCover,
};
