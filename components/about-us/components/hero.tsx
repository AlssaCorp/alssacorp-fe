import HeroContainer from "@/components/common/hero-container";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero-2.png" className="justify-center">
      <div className="container px-16 w-3/4 h-full flex text-start items-center relative z-10">
        <h1 className="!text-6xl font-bold">
          From 1990, Alssa Corp has been strengthening their presence until{" "}
          <span className="text-[#E4C87E]">now</span>.
        </h1>
      </div>
    </HeroContainer>
  );
}
