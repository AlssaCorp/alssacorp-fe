import { Card, CardContent } from "@/components/ui/card";
import { Statistic } from "@/dao/homepage";
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
    <div className="py-8 container px-16">
      <div className="text-3xl pb-8">
        <h1 className="font-normal">National</h1>
        <h1 className="font-black">Operation Coverage</h1>
      </div>
      <Card className="border-none h-full w-full shadow-none">
        <CardContent className="w-full text-[#FFF] p-0">
          <div className="w-full flex justify-center !rounded-[2em] overflow-hidden">
            <Image
              src={coverageMap}
              objectFit="contain"
              alt="coverage-map"
              width={1200}
              height={800}
            />
          </div>
        </CardContent>
      </Card>
      <div className="flex w-full justify-center pt-8">
        <div className="grid grid-cols-4 gap-6">
          {statistics.map((statistic) => (
            <div key={statistic.name}>
              <BannerCard
                number={statistic.number}
                description={statistic.name}
              />
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
    <Card className="bg-[#F1C248] p-4 !aspect-square w-[130px]">
      <CardContent className="p-0 text-center">
        <div className="flex flex-col justify-center items-center h-full w-full gap-2 text-[#253961BB]">
          <div className="text-5xl font-bold">{number}</div>
          <div className="text-sm font-medium">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
}

NationalOperationConverage.displayName;
("NationalOperationCoverage");
export default NationalOperationConverage;
