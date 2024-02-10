import HeroContainer from "@/components/common/HeroContainer";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero-1.png">
      <div className="container w-full flex !justify-end h-full px-10">
        <div className="w-3/5 flex items-center text-end relative z-10">
          <h1 className="!text-8xl font-bold ">
            The <span className="text-[#F1C248]">Solution</span> for your
            problem
          </h1>
          <div className="absolute right-0 bottom-32 underline-offset-2 underline text-xl italic font-bold cursor-pointer">
            Find Our Product
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
