"use client";

import HeroContainer from "@/components/common/hero-container";
import { useRouter } from "next/navigation";

export default function Hero() {
  const route = useRouter();
  return (
    <HeroContainer src="/img/hero/hero-1.png" className="!justify-center">
      <div className="container w-full flex !justify-end h-full px-16">
        <div className="w-3/5 flex items-center text-end relative z-10">
          <h1 className="!text-8xl font-bold ">
            The <span className="text-[#F1C248]">Solution</span> for your
            problems
          </h1>
          <div
            className="absolute right-0 bottom-32 underline-offset-2 underline text-xl italic font-bold cursor-pointer"
            onClick={() => route.push("products")}
          >
            Find Our Products
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
