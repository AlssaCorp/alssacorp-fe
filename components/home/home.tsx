import Certification from "./components/certification";
import Hero from "./components/hero";
import NationalOperationConverage from "./components/national-operation-coverage";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <div className="relative bg-[#fff]">
      <Hero />
      <NationalOperationConverage />
      <Certification />
      <Portfolio />
    </div>
  );
}
