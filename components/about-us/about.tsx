import { FC } from "react";
import AboutAlssa from "./components/about-alssa";
import Ceo from "./components/ceo";
import Hero from "./components/hero";
import Hero2 from "./components/hero-2";
import NowDays from "./components/nowdays";
import OurPortfolio from "./components/our-portfolio";
import { AboutUsClient } from "@/dao/aboutUs";

const About: FC = () => {
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
};

About.displayName = "About";
export default About;
