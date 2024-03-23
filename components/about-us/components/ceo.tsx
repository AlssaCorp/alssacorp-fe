"use client";

import HeroContainer from "@/components/common/hero-container";

export default function Ceo() {
  return (
    <div className="hidden md:block">
      <HeroContainer
        src="/img/hero/hero-4.webp"
        className="md:h-[350px] lg:h-[300px] flex justify-center items-center px-4 sm:px-8 lg:px-16"
      >
        <div className="text-justify border-t px-4 sm:px-8 lg:px-16 text-3xl pt-4 font-semibold text-[28px]">
          “Innovation, collaboration, and unwavering commitment, Alssa
          Corporindo is driving transformative change and empowering businesses
          to thrive in the dynamic Indonesian market.”
        </div>
        <div className="border-b px-4 sm:px-8 lg:px-16 mt-4 pb-4">
          <div className="font-bold">Dian Susanti, S.E</div>
          <div className="text-xs">President Director</div>
        </div>
      </HeroContainer>
    </div>
  );
}
