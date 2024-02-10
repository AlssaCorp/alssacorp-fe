"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ceo() {
  const route = useRouter();
  return (
    <div className="container ">
      <div className="py-8 my-8 px-10 gap-4 border-y-2 grid grid-cols-4">
        <Image
          src={"/img/dian-susanti-photo.png"}
          width={350}
          height={350}
          alt="dian-susanti"
        />
        <div className="flex flex-col justify-end py-8">
          <div className="text-2xl font-bold">Dian Susanti, S.E</div>
          <p className="text-lg">President Director</p>
        </div>
        <div className="flex flex-col justify-end py-8 col-span-2">
          <div className="flex justify-end text-lg font-bold">
            <div
              className="flex !w-full items-center justify-end gap-4 cursor-pointer italic font-normal text-md text-[#B69D74]"
              onClick={() => {
                route.push("/about-us/message-from-ceo");
              }}
            >
              Read More <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
