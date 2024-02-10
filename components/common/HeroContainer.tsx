import Image from "next/image";

interface HeroContainer {
  children: React.ReactNode;
  className?: string;
  src: string;
}

export default function HeroContainer({
  children,
  className,
  src,
}: HeroContainer) {
  return (
    <div
      className={`w-full h-screen flex justify-end relative text-[#FFF] ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image src={src} layout="fill" objectFit="cover" alt="hero-1" />
      </div>
      {children}
    </div>
  );
}
