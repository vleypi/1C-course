import { joinClassNames } from "@/shared/lib";
import type { AvatarHair } from "@/shared/ui/content/chat/chat.constant";
import { PersonSilhouette } from "@/shared/ui/content/chat/PersonSilhouette";

interface IChatAvatarProps {
  hair: AvatarHair;
  className: string;
}

export const ChatAvatar = ({ hair, className }: IChatAvatarProps) => (
  <span
    className={joinClassNames("block size-11 shrink-0 overflow-hidden rounded-full ring-1 ring-inset", className)}
    aria-hidden="true"
  >
    <PersonSilhouette hair={hair} />
  </span>
);
