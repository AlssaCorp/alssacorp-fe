"use client";

import HeroContainer from "@/components/common/hero-container";
import { useRouter } from "next/navigation";

export default function Hero() {
  const route = useRouter();
  return (
    <HeroContainer src="/img/hero/hero-1.png" className="!justify-center">
      <div className="container w-full flex !justify-end h-full px-4 sm:px-8 lg:px-16">
        <div className="w-full lg:w-3/5 flex items-center text-center lg:text-end relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
            The <span className="text-[#F1C248]">Solution</span> for your
            problems
          </h1>
          <div
            className="absolute right-0 bottom-32 underline-offset-2 underline text-sm md:text-lg lg:text-xl italic font-bold cursor-pointer"
            onClick={() => route.push("products")}
          >
            Find Our Products
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
