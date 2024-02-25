"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ceo() {
  const route = useRouter();
  return (
    <div className="container ">
      <div className="py-8 my-8 px-16 gap-8 border-y border-[#000] grid grid-cols-4">
        <div className="rounded-full overflow-hidden aspect-square">
          <Image
            src={"/img/ceo/dian-susanti-photo.png"}
            width={350}
            height={350}
            alt="dian-susanti"
          />
        </div>
        <div className="font-black text-2xl col-span-3 flex flex-col justify-center gap-4 relative">
          <div>
            &quot;Through innovation, collaboration, and unwavering commitment,
            Alssa Corporindo is driving transformative change and empowering
            businesses to thrive in the dynamic Indonesian market.&quot;
          </div>
          <div>
            <div className="text-lg font-semibold">Dian Susanti, S.E</div>
            <p className="text-base font-medium">President Director</p>
          </div>
          <div className="absolute flex justify-end text-lg font-bold right-0 bottom-0">
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
