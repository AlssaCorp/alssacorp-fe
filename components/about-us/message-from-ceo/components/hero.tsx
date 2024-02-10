import HeroContainer from "@/components/common/HeroContainer";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero-4.png" className="justify-center">
      <div className="container px-10 w-3/4 h-full flex text-start items-center relative z-10">
        <h1 className="!text-6xl font-bold text-center">
          Embracing The Power of
          <span className="text-[#E4C87E]">Teamwork</span>.
        </h1>
      </div>
    </HeroContainer>
  );
}
