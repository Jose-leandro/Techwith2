// components/CategoryCard.tsx
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
};

export default function CategoryCard({ src, alt, title }: Props) {
  return (
    <div className="text-center flex flex-col items-center">
      <Image src={src} alt={alt} width={250} height={150} className="mx-auto" />
      <h3 className="mt-2 font-medium text-3xl font-garamond w-3/4">{title}</h3>
    </div>
  );
}
