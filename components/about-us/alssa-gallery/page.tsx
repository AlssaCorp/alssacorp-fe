"use client";

import { League_Spartan } from "next/font/google";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export default function AlssaGallery() {
  return (
    <div className="bg-[#FFF]">
      <div className="container px-16 py-8">
        <div className={`mt-8 ${leagueSpartan.className} !text-3xl`}>
          <h1 className="font-light text-[#1F2839]">Alssa&apos;s</h1>
          <h1 className="text-[#F1C248] font-black">Gallery</h1>
        </div>
        <div className="bg-[#38619F] grid grid-cols-3 gap-12 p-12 mt-8">
          {Array.from({ length: 10 }).map((el, id) => (
            <div key={id}>
              <GalleryItem />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryItem() {
  return <div className="w-100 aspect-square bg-[#D9D9D9]"></div>;
}
