import Image from "next/image";
import React from "react";

interface HeroContainer {
  children?: React.ReactNode;
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
        <Image src={src} fill className="object-cover" alt="hero-1" priority />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(37, 57, 97, 0.4), rgba(37, 57, 97, 0.4))",
            zIndex: 1,
          }}
        ></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
