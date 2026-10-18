import { type ComponentType, useId } from "react";
import type { ICoverPaletteProps } from "@/entities/course/interfaces/module-cover.interface";

const BARBER_POLE_STRIPES = [0, 1, 2, 3, 4, 5];
const INDEX_CARDS = [0, 1, 2];
const INDEX_CARD_LINES = [34, 50, 66];
const FORM_FIELDS = [0, 1, 2];

const BarberPole = ({ palette }: ICoverPaletteProps) => {
  const clipId = useId();

  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <rect x="140" y="39" width="40" height="92" rx="6" />
        </clipPath>
      </defs>
      <rect x="140" y="39" width="40" height="92" rx="6" fill={palette.secondary} />
      <g clipPath={`url(#${clipId})`}>
        {BARBER_POLE_STRIPES.map((stripe) => (
          <path key={stripe} d={`M120 ${19 + stripe * 28}l80 -40v14l-80 40Z`} fill={palette.primary} />
        ))}
      </g>
      <rect x="132" y="29" width="56" height="12" rx="6" fill={palette.primary} />
      <rect x="132" y="129" width="56" height="12" rx="6" fill={palette.primary} />
      <circle cx="160" cy="23" r="6" fill={palette.secondary} />
    </>
  );
};

const CardIndex = ({ palette }: ICoverPaletteProps) => (
  <>
    {INDEX_CARDS.map((card) => {
      const front = card === INDEX_CARDS.length - 1;
      return (
        <g key={card} transform={`translate(${100 + card * 22} ${30 + card * 18})`}>
          <path
            d="M0 14h30l6-12h30l6 12h28v86H0Z"
            fill={front ? palette.secondary : palette.primary}
            fillOpacity={front ? 1 : 0.5 + card * 0.25}
          />
          {front &&
            INDEX_CARD_LINES.map((y, line) => (
              <rect
                key={y}
                x="14"
                y={y}
                width={line === INDEX_CARD_LINES.length - 1 ? 40 : 72}
                height="6"
                rx="3"
                fill={palette.background}
                fillOpacity="0.4"
              />
            ))}
        </g>
      );
    })}
  </>
);

const FormWindow = ({ palette }: ICoverPaletteProps) => (
  <g transform="translate(90 22)">
    <rect width="140" height="116" rx="8" fill={palette.secondary} />
    <rect width="140" height="20" rx="8" fill={palette.primary} />
    <rect y="12" width="140" height="8" fill={palette.primary} />
    {FORM_FIELDS.map((field) => (
      <g key={field} transform={`translate(14 ${32 + field * 22})`}>
        <rect width="30" height="6" y="5" rx="3" fill={palette.background} fillOpacity="0.35" />
        <rect
          x="40"
          width="72"
          height="16"
          rx="4"
          fill="none"
          stroke={palette.background}
          strokeOpacity="0.35"
          strokeWidth="2"
        />
      </g>
    ))}
    <rect x="76" y="96" width="50" height="12" rx="6" fill={palette.primary} />
  </g>
);

export const SUBJECT_ILLUSTRATIONS: readonly ComponentType<ICoverPaletteProps>[] = [
  BarberPole,
  CardIndex,
  FormWindow,
];
