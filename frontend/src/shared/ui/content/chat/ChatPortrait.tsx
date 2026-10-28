import Image from "next/image";
import { CHAT_AVATAR_SIZE } from "@/shared/ui/content/chat/chat.constant";

interface IChatPortraitProps {
  image: string;
}

export const ChatPortrait = ({ image }: IChatPortraitProps) => (
  <Image
    src={image}
    alt=""
    width={CHAT_AVATAR_SIZE}
    height={CHAT_AVATAR_SIZE}
    className="size-11 shrink-0 rounded-full"
  />
);
