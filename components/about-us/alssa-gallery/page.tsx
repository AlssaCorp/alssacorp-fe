"use client";

import { Gallery, GalleryResponse } from "@/dao/galleryResponse";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

interface AlssaGalleryProps {
  data: GalleryResponse;
}

const AlssaGallery: FC<AlssaGalleryProps> = ({ data }) => {
  return (
    <div className="bg-[#FFF]">
      <div className="container px-16 py-8">
        <div className={`mt-8 ${leagueSpartan.className} !text-3xl`}>
          <h1 className="font-light text-[#1F2839]">Alssa&apos;s</h1>
          <h1 className="text-[#F1C248] font-black">Gallery</h1>
        </div>
        <div className="bg-[#38619F] grid grid-cols-3 gap-12 p-12 mt-8">
          {data.galleries.map((gallery) => (
            <div key={gallery.name}>
              <GalleryItem gallery={gallery} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface GalleryItemProps {
  gallery: Gallery;
}

const GalleryItem: FC<GalleryItemProps> = ({ gallery }) => {
  return (
    <div className="relative w-full aspect-square w-full bg-[#D9D9D9]">
      <Image
        src={gallery.image}
        layout="fill"
        objectFit="cover"
        alt={gallery.name}
      />
    </div>
  );
};

AlssaGallery.displayName = "AlssaGallery";
export default AlssaGallery;
