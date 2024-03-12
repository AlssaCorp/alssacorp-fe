"use client";

import { Gallery, GalleryResponse } from "@/dao/galleryResponse";
import getImageUrl from "@/utils/getImageUrl";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

interface AlssaGalleryProps {
  data: GalleryResponse;
}

const AlssaGallery: FC<AlssaGalleryProps> = ({ data }) => {
  return (
    <div className="bg-[#FFF]">
      <div className="container px-4 sm:px-8 lg:px-16 pt-8">
        <div
          className={`mt-8 ${leagueSpartan.className} text-4xl lg:text-5xl text-center md:text-start`}
        >
          <h1 className="font-light text-[#1F2839] hidden md:block">
            Alssa&apos;s
          </h1>
          <h1 className="text-[#F1C248] font-bold md:font-black">
            <span className="md:hidden text-[#1F2839]">Alssa&apos;s</span>{" "}
            Gallery
          </h1>
        </div>
      </div>
      <div className="container md:pb-8 px-0 lg:px-16">
        <div className="bg-[#38619F] hidden md:grid grid-cols-3 md:gap-8 md:p-8 lg:gap-12 lg:p-12 mt-8">
          {data.galleries.map((gallery) => (
            <div key={gallery.name}>
              <GalleryItem gallery={gallery} />
            </div>
          ))}
        </div>
        <div className="bg-[#38619F] block md:hidden md:p-8 lg:p-12 mt-8">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          >
            {data.galleries.map((gallery) => (
              <SwiperSlide
                key={gallery.name}
                className="flex items-center justify-center p-4"
              >
                <GalleryItem gallery={gallery} />
              </SwiperSlide>
            ))}
          </Swiper>
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
    <div className="relative w-full aspect-square w-full bg-[#38619F]">
      <Image
        src={getImageUrl(gallery.image)}
        fill
        sizes="500px"
        alt={gallery.name}
        className="object-contain md:object-cover"
      />
    </div>
  );
};

AlssaGallery.displayName = "AlssaGallery";
export default AlssaGallery;
