export const CHAT_TEXT = {
  studentName: "Вы",
} as const;

export const CHAT_PEOPLE = {
  vova: { name: "Вова", image: "/avatars/vova.webp" },
  irina: { name: "Ирина", image: "/avatars/irina.webp" },
  katya: { name: "Катя", image: "/avatars/katya.webp" },
} as const;

export type ChatPerson = keyof typeof CHAT_PEOPLE;

export const STUDENT_AVATAR_IMAGE = "/avatars/owner.webp";

export const CHAT_AVATAR_SIZE = 44;

export type ChatSide = "left" | "right";

export type ChatTone = "companion" | "student";

export type AvatarHair = "short" | "long";

export const AVATAR_COLORS = {
  orange: "bg-orange-400/15 text-orange-400 ring-orange-400/40",
  violet: "bg-violet-400/15 text-violet-400 ring-violet-400/40",
  sky: "bg-sky-400/15 text-sky-400 ring-sky-400/40",
  pink: "bg-pink-400/15 text-pink-400 ring-pink-400/40",
  lime: "bg-lime-400/15 text-lime-400 ring-lime-400/40",
} as const;

export type AvatarColor = keyof typeof AVATAR_COLORS;


export const CHAT_BUBBLE_STYLES: Record<ChatTone, string> = {
  companion: "bg-raise text-zinc-200",
  student: "bg-accent text-ink [&_strong]:text-ink",
};

export const CHAT_SIDE_STYLES: Record<ChatSide, string> = {
  left: "rounded-bl-md",
  right: "rounded-br-md",
};
