import type { ReactNode } from "react";
import { joinClassNames } from "@/shared/lib";
import { ChatAvatar } from "@/shared/ui/content/chat/ChatAvatar";
import { ChatPortrait } from "@/shared/ui/content/chat/ChatPortrait";
import {
  AVATAR_COLORS,
  type AvatarColor,
  type AvatarHair,
  CHAT_BUBBLE_STYLES,
  CHAT_PEOPLE,
  CHAT_SIDE_STYLES,
  CHAT_TEXT,
  type ChatPerson,
  type ChatSide,
  STUDENT_AVATAR_IMAGE,
} from "@/shared/ui/content/chat/chat.constant";

interface IChatMessageProps {
  person?: ChatPerson;
  name?: string;
  avatar?: AvatarColor;
  hair?: AvatarHair;
  side?: ChatSide;
  student?: boolean;
  children: ReactNode;
}

const resolveSpeaker = (person: ChatPerson | undefined, name: string, student: boolean) => {
  if (student) return { speaker: CHAT_TEXT.studentName, image: STUDENT_AVATAR_IMAGE };
  if (person) return { speaker: CHAT_PEOPLE[person].name, image: CHAT_PEOPLE[person].image };
  return { speaker: name, image: null };
};

export const ChatMessage = ({
  person,
  name = "",
  avatar = "orange",
  hair = "short",
  side = "left",
  student = false,
  children,
}: IChatMessageProps) => {
  const { speaker, image } = resolveSpeaker(person, name, student);
  const messageSide: ChatSide = student ? "right" : side;
  const alignRight = messageSide === "right";

  return (
    <div className={joinClassNames("flex items-end gap-3", alignRight && "flex-row-reverse")}>
      {image ? <ChatPortrait image={image} /> : <ChatAvatar hair={hair} className={AVATAR_COLORS[avatar]} />}
      <div className={joinClassNames("flex max-w-[85%] flex-col gap-1", alignRight ? "items-end" : "items-start")}>
        <span className="px-1 text-sm text-muted">{speaker}</span>
        <div
          className={joinClassNames(
            "rounded-3xl px-5 py-3 text-base [&>p]:mt-0 [&>p+p]:mt-2",
            CHAT_SIDE_STYLES[messageSide],
            CHAT_BUBBLE_STYLES[student ? "student" : "companion"],
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
