import HeroContainer from "@/components/common/HeroContainer";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero-1.png">
      <div className="absolute bottom-16 right-[32px] underline-offset-2 underline text-xl italic font-bold cursor-pointer">
        Find Our Product
      </div>
      <div className="w-3/5 h-full flex !justify-end text-end items-center relative z-10">
        <h1 className="!text-8xl font-bold pr-8 ">
          The <span className="text-[#F1C248]">Solution</span> for your problem
        </h1>
      </div>
    </HeroContainer>
  );
}
