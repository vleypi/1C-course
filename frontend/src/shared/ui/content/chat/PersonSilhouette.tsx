import type { AvatarHair } from "@/shared/ui/content/chat/chat.constant";

interface IPersonSilhouetteProps {
  hair: AvatarHair;
}

export const PersonSilhouette = ({ hair }: IPersonSilhouetteProps) => (
  <svg viewBox="0 0 44 44" className="size-full" fill="currentColor" aria-hidden="true">
    {hair === "long" && <path d="M12.5 19.5c0-7 4.3-11.5 9.5-11.5s9.5 4.5 9.5 11.5V30h-19z" />}
    <circle cx="22" cy="18" r="7.5" />
    {hair === "short" && <path d="M14.4 16.2c.6-5 3.8-7.7 7.6-7.7s7 2.7 7.6 7.7c-2.4-2.3-5-3.2-7.6-3.2s-5.2.9-7.6 3.2z" />}
    <path d="M7 44c0-9.2 6.7-15 15-15s15 5.8 15 15z" />
  </svg>
);
