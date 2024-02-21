import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";

export default function OurPortfolio() {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="py-8 container px-16 ">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Our</h1>
          <h1 className="font-black">Portfolio</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-4 text-center max-w-[1200px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="aspect-square flex items-center justify-center"
              >
                <CardContent>
                  <Image
                    src="/img/total-logo.png"
                    width={400}
                    height={400}
                    alt={`Card ${index + 1}`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-full max-w-[1200px] mt-4">
            <p className="text-end mt-4">Last updated: XX MM 2024</p>
          </div>
          <div className="w-full max-w-[1200px] mt-4 flex justify-center">
            <Pagination count={10} size="large" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
