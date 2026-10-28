import type { ComponentType } from "react";
import { type IIconProps, SvgIcon } from "@/shared/ui/icons/SvgIcon";

const ConsoleIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M6.5 7h11a4.5 4.5 0 0 1 4.4 5.4l-.8 3.8a2.5 2.5 0 0 1-4.3 1.2L15 15.5H9l-1.8 1.9a2.5 2.5 0 0 1-4.3-1.2l-.8-3.8A4.5 4.5 0 0 1 6.5 7z" />
    <path d="M7.5 10v3.5M5.75 11.75h3.5M15.5 11h.01M17.5 13h.01" />
  </SvgIcon>
);

const DiscIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 5.5A6.5 6.5 0 0 1 18.5 12" />
  </SvgIcon>
);

const SaveIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M4 5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 3v4h7V3M7 21v-7h10v7" />
  </SvgIcon>
);

const FormIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </SvgIcon>
);

const RecordsIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M9 3h8a2 2 0 0 1 2 2v11" />
    <rect x="5" y="7" width="11" height="14" rx="2" />
    <path d="M8.5 12h4M8.5 16h2.5" />
  </SvgIcon>
);

const ReceiptIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </SvgIcon>
);

const PeopleIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14a5 5 0 0 1 5 6" />
  </SvgIcon>
);

const BoxIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
  </SvgIcon>
);

const FactoryIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M3 21V10l6 4v-4l6 4V4h4v17z" />
    <path d="M3 21h18M7 17.5h2M12 17.5h2" />
  </SvgIcon>
);

export const CARD_ICONS = {
  console: ConsoleIcon,
  disc: DiscIcon,
  save: SaveIcon,
  form: FormIcon,
  records: RecordsIcon,
  receipt: ReceiptIcon,
  people: PeopleIcon,
  box: BoxIcon,
  factory: FactoryIcon,
} satisfies Record<string, ComponentType<IIconProps>>;

export type CardIconName = keyof typeof CARD_ICONS;
