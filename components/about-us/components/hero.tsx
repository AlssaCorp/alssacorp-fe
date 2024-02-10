import HeroContainer from "@/components/common/HeroContainer";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero-2.png" className="justify-center">
      <div className="w-4/5 h-full flex text-start items-center relative z-10">
        <h1 className="!text-6xl font-bold">
          From 1990, Alssa Corp has been strengthening their presence until{" "}
          <span className="text-[#E4C87E]">now</span>.
        </h1>
      </div>
    </HeroContainer>
  );
}
