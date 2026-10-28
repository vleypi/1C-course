import Image from "next/image";
import { ILLUSTRATION_SIZE } from "@/shared/ui/content/illustration/illustration.constant";

interface IIllustrationProps {
  src: string;
  alt: string;
}

export const Illustration = ({ src, alt }: IIllustrationProps) => (
  <Image
    src={src}
    alt={alt}
    width={ILLUSTRATION_SIZE.width}
    height={ILLUSTRATION_SIZE.height}
    sizes={ILLUSTRATION_SIZE.sizes}
    className="mt-10 h-auto w-full rounded-3xl"
  />
);
