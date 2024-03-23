import SectionTitleStyle1 from "@/components/common/section-title/section-title-style-1";
import { Card, CardContent } from "@/components/ui/card";
import { Statistic } from "@/dao/homepage";
import getImageUrl from "@/utils/getImageUrl";
import Image from "next/image";
import { FC } from "react";

interface NationalOperationConverageProps {
  coverageMap: string;
  statistics: Statistic[];
}

const NationalOperationConverage: FC<NationalOperationConverageProps> = ({
  coverageMap,
  statistics,
}) => {
  return (
    <div className="py-8 container px-4 sm:px-8 lg:px-16">
      <SectionTitleStyle1 line1="National" line2="Operation Coverage" />
      <Card className="border-none h-full w-full shadow-none">
        <CardContent className="w-full text-[#FFF] p-0">
          <div className="w-full flex justify-center md:rounded-[2em] overflow-hidden">
            <Image
              src={getImageUrl(coverageMap)}
              className="object-contain"
              alt="coverage-map"
              sizes="1200px"
              width={1200}
              height={800}
            />
          </div>
        </CardContent>
      </Card>
      <div className="flex w-full justify-center pt-8">
        <div className="grid sm:grid-cols-4 gap-6">
          {statistics.map((statistic) => (
            <div key={statistic.name} className="flex gap-4 items-center">
              <BannerCard
                number={statistic.number}
                description={statistic.name}
              />
              <div className="block sm:hidden text-lg">{statistic.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface BannerCardProps {
  number: number;
  description: string;
}

export function BannerCard({ number, description }: BannerCardProps) {
  return (
    <Card className="bg-[#F1C248] p-4 fallback-aspect-square w-[90px] sm:w-[130px]">
      <CardContent className="p-0 text-center w-full h-fit">
        <div className="flex flex-col justify-center sm:justify-start items-center h-fit w-full gap-2 text-[#253961BB]">
          <div className="text-5xl font-bold">{number}</div>
          <div className="hidden sm:block text-sm font-medium">
            {description}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

NationalOperationConverage.displayName;
("NationalOperationCoverage");
export default NationalOperationConverage;
