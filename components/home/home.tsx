import Certification from "./components/certification";
import Glimpse from "./components/glimpse";
import Hero from "./components/hero";
import NationalOperationConverage from "./components/national-operation-coverage";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <div className="relative bg-[#fff]">
      <Hero />
      <Glimpse />
      <NationalOperationConverage />
      <Certification />
      <Portfolio />
    </div>
  );
}
