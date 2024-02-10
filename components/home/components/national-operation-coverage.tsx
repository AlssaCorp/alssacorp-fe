import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function NationalOperationConverage() {
  return (
    <div className="py-8 container px-10">
      <div className="text-3xl pb-8">
        <h1 className="font-normal">National</h1>
        <h1 className="font-black">Operation Coverage</h1>
      </div>
      <div className="flex justify-center">
        <Card className="bg-[#E2E5E8] h-full w-fit flex justify-center !rounded-[2em]">
          <CardContent className="w-full flex justify-end relative text-[#FFF] p-0">
            <Image
              src="/img/indonesia-map.png"
              width={1200}
              height={700}
              objectFit="contain"
              alt="hero-1"
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full justify-center pt-8">
        <div className="grid grid-cols-4 gap-6">
          <BannerCard number={13} description="Regional Support" />
          <BannerCard number={26} description="Clients & Partners" />
          <BannerCard number={26} description="Projects" />
          <BannerCard number={7} description="Awards & Recognitions" />
        </div>
      </div>
    </div>
  );
}

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
