import { type IIconProps, SvgIcon } from "@/shared/ui/icons/SvgIcon";

export const LockIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </SvgIcon>
);

export const CloseIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </SvgIcon>
);

export const CheckIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </SvgIcon>
);

export const ProgressIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M20 12a8 8 0 1 1-2.34-5.66" />
    <path d="M20 4v5h-5" />
  </SvgIcon>
);

export const ChevronRightIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M9 6l6 6-6 6" />
  </SvgIcon>
);

export const ArrowDownIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </SvgIcon>
);

export const LightbulbIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
  </SvgIcon>
);

export const BookmarkIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <path d="M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1z" />
  </SvgIcon>
);

export const AlertIcon = ({ className }: IIconProps) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5.5M12 16.5h.01" />
  </SvgIcon>
);
