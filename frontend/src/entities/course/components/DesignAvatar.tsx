import { ART_PALETTES } from "@/shared/config";
import { joinClassNames } from "@/shared/lib";
import {
  AVATAR_MARK,
  AVATAR_SIZE_CLASSES,
  type AvatarSize,
  DESIGN_AVATAR_FRAMES,
  DESIGN_AVATAR_SEEDS,
} from "@/entities/course/constants/design-avatar.constant";
import { MODULE_CARD_DESIGNS } from "@/entities/course/constants/module-card-design.constant";
import type { IAppearance } from "@/entities/course/interfaces/appearance.interface";
import type { ICoverFrame } from "@/entities/course/interfaces/module-cover.interface";
import { MODULE_COVERS } from "@/entities/course/components/module-card/covers/module-covers";

interface IDesignAvatarProps extends IAppearance {
  size: AvatarSize;
}

const toViewBox = ({ x, y, size }: ICoverFrame): string => `${x} ${y} ${size} ${size}`;

export const DesignAvatar = ({ design, color, size }: IDesignAvatarProps) => {
  const Cover = MODULE_COVERS[MODULE_CARD_DESIGNS[design].cover];

  return (
    <span className={joinClassNames("block shrink-0 overflow-hidden rounded-full", AVATAR_SIZE_CLASSES[size])}>
      <Cover
        mark={AVATAR_MARK}
        seed={DESIGN_AVATAR_SEEDS[design]}
        palette={ART_PALETTES[color]}
        viewBox={toViewBox(DESIGN_AVATAR_FRAMES[design])}
      />
    </span>
  );
};
