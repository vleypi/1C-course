import type { ICoverArtProps } from "@/entities/course/interfaces/module-cover.interface";
import { CoverCanvas } from "@/entities/course/components/module-card/covers/CoverCanvas";

const STRIPE_ANGLE = 25;

export const StripesCover = ({ seed, palette, viewBox }: ICoverArtProps) => {
  const angle = seed % 2 ? STRIPE_ANGLE : -STRIPE_ANGLE;

  return (
    <CoverCanvas palette={palette} viewBox={viewBox}>
      <g transform={`rotate(${angle} 160 80)`}>
        <rect x="40" y="-100" width="46" height="400" fill={palette.primary} />
        <rect x="100" y="-100" width="18" height="400" fill={palette.secondary} />
        <rect x="200" y="-100" width="70" height="400" fill={palette.primary} fillOpacity="0.6" />
      </g>
    </CoverCanvas>
  );
};
