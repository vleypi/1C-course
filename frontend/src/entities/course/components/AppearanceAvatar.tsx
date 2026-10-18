"use client";

import type { AvatarSize } from "@/entities/course/constants/design-avatar.constant";
import { useAppearance } from "@/entities/course/hooks/useAppearance";
import type { IAppearance } from "@/entities/course/interfaces/appearance.interface";
import { DesignAvatar } from "@/entities/course/components/DesignAvatar";

interface IAppearanceAvatarProps {
  initial: IAppearance;
  size: AvatarSize;
}

export const AppearanceAvatar = ({ initial, size }: IAppearanceAvatarProps) => {
  const { design, color } = useAppearance(initial);
  return <DesignAvatar design={design} color={color} size={size} />;
};
