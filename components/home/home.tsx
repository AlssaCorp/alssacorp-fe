import { FC } from "react";
import Certification from "./components/certification";
import Glimpse from "./components/glimpse";
import Hero from "./components/hero";
import NationalOperationConverage from "./components/national-operation-coverage";
import Portfolio from "./components/portfolio";
import { HomePage } from "@/dao/homepage";

interface HomeProps {
  data: HomePage;
}

const Home: FC<HomeProps> = ({ data }) => {
  return (
    <div className="relative bg-[#fff] text-[#19253E]">
      <Hero />
      <Glimpse testimonies={data.testimonies} />
      <NationalOperationConverage
        statistics={data.statistics}
        coverageMap={data.coverage_map}
      />
      <Certification certificates={data.certificates} />
      <Portfolio portfolio={data.portfolio} />
    </div>
  );
};

Home.displayName = "Home";
export default Home;
