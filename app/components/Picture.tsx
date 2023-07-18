import Image from 'next/image';

export default function Picture({
  mainImage,
}: {
  mainImage: {
    style: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}) {
  return (
    <Image
      className={mainImage.style} /*using style instead of className*/
      src={mainImage.src}
      alt={mainImage.alt}
      width={mainImage.width}
      height={mainImage.height}
    />
  );
}
