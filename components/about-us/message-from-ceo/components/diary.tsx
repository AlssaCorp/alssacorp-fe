"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Diary() {
  const route = useRouter();
  return (
    <div className="container px-16 py-8">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Alssa Corporindo&apos;s Diary</h1>
      </div>
      <div className="relative">
        <div className="relative">
          <Image
            src="/img/hero/hero-5.png"
            width={2000}
            height={2000}
            alt="diary"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          />
        </div>
        <div className="absolute z-[100] text-[#FFF] flex flex-col items-center top-1/2 -translate-y-1/2">
          <div className="max-w-[75%] flex flex-col items-center gap-4">
            <div>
              <h1 className="font-bold italic text-center">
                We Cherish Every Moment Together
              </h1>
            </div>
            <div>
              <p className="text-center">
                At Alssa Corporindo, our success is rooted in our strong values
                of integrity, collaboration, and innovation. We believe that by
                fostering a culture of trust, embracing teamwork, and constantly
                pushing the boundaries of what is possible, we can achieve
                greatness. Together, let&apos;s challenge the status quo,
                embrace change, and embark on a transformative journey that will
                redefine the way we do business.
              </p>
            </div>
          </div>
        </div>
        <div
          className="z-[100] absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1F2839] w-full py-3 rounded-b-[20px] cursor-pointer"
          onClick={() => route.push("/about-us/alssa-gallery")}
        >
          <div className="flex gap-2 justify-center font-bold text-[#FFF]">
            More of Our Gallery
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
