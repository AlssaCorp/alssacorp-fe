import HeroContainer from "@/components/common/hero-container";

export default function Hero() {
  return (
    <HeroContainer src="/img/hero/hero-2.jpg" className="justify-center">
      <div className="container px-4 sm:px-8 lg:px-16 md:w-3/4 h-full flex text-center md:text-start items-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          From 1990, Alssa Corp has been strengthening their presence until{" "}
          <span className="text-[#E4C87E]">now</span>.
        </h1>
      </div>
    </HeroContainer>
  );
}
