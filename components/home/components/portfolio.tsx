"use client";

import SectionTitleStyle1 from "@/components/common/section-title/section-title-style-1";
import getImageUrl from "@/utils/getImageUrl";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC } from "react";

interface PortfolioProps {
  portfolio: string;
}

const Portfolio: FC<PortfolioProps> = ({ portfolio }) => {
  const downloadPortfolio = () => {
    if (
      portfolio &&
      (portfolio.startsWith("http://") || portfolio.startsWith("https://"))
    ) {
      window.location.href = getImageUrl(portfolio);
    }
  };

  return (
    <div className="py-8 container px-4 sm:px-8 lg:px-16">
      <SectionTitleStyle1 line1="Alssa Corp" line2="Portfolio" />
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-[1200px] pb-8">
          <p className="text-normal text-md text-justify">
            With a track record of excellence and innovation, Alssa Corporindo
            Services has been entrusted with the task of implementing
            cutting-edge communication systems at PT Badak NGL. Through their
            expertise and commitment to delivering reliable and efficient
            solutions, Alssa Corporindo Services aims{" "}
          </p>
        </div>
        <Link
          href={getImageUrl(portfolio)}
          className="text-[#FFF] bg-[#1F2839] px-6 py-2 w-fit flex justify-center items-center rounded-lg text-sm"
          onClick={downloadPortfolio}
        >
          <span className="pr-2">See Here!</span>
          <ArrowRightIcon fontSize={25} />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
