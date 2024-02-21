import AboutAlssa from "./components/about-alssa";
import Ceo from "./components/ceo";
import Hero from "./components/hero";
import Hero2 from "./components/hero-2";
import NowDays from "./components/nowdays";
import OurPortfolio from "./components/our-portfolio";

export default function About() {
  return (
    <div className="bg-[#FFF] text-[#19253E]">
      <Hero />
      <AboutAlssa />
      <Hero2 />
      <NowDays />
      <Ceo />
      <OurPortfolio />
    </div>
  );
}
