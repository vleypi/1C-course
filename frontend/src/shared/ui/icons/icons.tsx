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
