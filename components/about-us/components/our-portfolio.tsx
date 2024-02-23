"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { AboutUsClient } from "@/dao/aboutUs";
import axios from "axios";

const OurPortfolio: FC = () => {
  const [data, setData] = useState<AboutUsClient>();
  const handleChange = async (_event: ChangeEvent<unknown>, value: number) => {
    getData(value);
  };

  const getData = async (value: number) => {
    const { data }: { data: AboutUsClient } = await axios.get(
      `/api/clients?page=${value}`,
    );
    setData(data);
  };

  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div className="bg-[#F2F2F2]">
      <div className="py-8 container max-w-[1000px] px-16 ">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Our</h1>
          <h1 className="font-black">Portfolio</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full grid grid-cols-4 gap-4 text-center max-w-[1200px]">
            {data?.clients.map((client) => (
              <Card
                key={client.name}
                className="aspect-square flex items-center justify-center p-0 overflow-hidden w-full h-full"
              >
                <CardContent className="p-0 relative w-full h-full">
                  <Image
                    src={client.logo}
                    layout="fill"
                    objectFit="cover"
                    alt={client.name}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-full max-w-[1200px] mt-4">
            <p className="text-end mt-4">Last updated: {data?.last_updated}</p>
          </div>
          <div className="w-full max-w-[1200px] mt-4 flex justify-center">
            <Pagination
              onChange={handleChange}
              count={data?.max_page}
              size="large"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

OurPortfolio.displayName = "OurPortfolio";
export default OurPortfolio;
