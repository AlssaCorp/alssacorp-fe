"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { FC, useState } from "react";
import { Testimony } from "@/dao/homepage";
import getImageUrl from "@/utils/getImageUrl";

interface GlimpseProps {
  testimonies: Testimony[];
}

const Glimpse: FC<GlimpseProps> = ({ testimonies }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-8">
      <div className="bg-[#1F283911]">
        <div className="py-8 container px-16">
          <div className="text-3xl pb-8">
            <h1 className="font-normal">Glimpse</h1>
            <h1 className="font-black">of Our Satisfied Clients</h1>
          </div>
          <div className="">
            <Swiper
              loop={true}
              centeredSlides={true}
              modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
              slidesPerView={testimonies.length <= 3 ? 1 : 3}
              initialSlide={0}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={(e) => setActiveIndex(e.realIndex)}
              className="h-full w-full max-w-[1200px] relative"
            >
              {testimonies.map((testimony, id) => (
                <div className="!h-[350px]" key={`${id} ${testimony.brand}`}>
                  <SwiperSlide
                    className="!flex !justify-center w-full items-center mb-8"
                    key={`${id} ${testimony.brand}`}
                  >
                    <div
                      className={`flex !h-[300px] aspect-square p-12 ${id === activeIndex && "!p-2"}`}
                    >
                      <Image
                        src={getImageUrl(testimony.brand_logo)}
                        width={id === activeIndex ? 350 : 250}
                        height={id === activeIndex ? 350 : 250}
                        className="object-cover"
                        alt={testimony.brand}
                      />
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
          <div className="pt-8">
            <p className="font-semibold italic text-center">
              {testimonies[activeIndex].heading}
            </p>
          </div>
          <div className="pt-8 w-full flex justify-center">
            <p className="max-w-[1200px]">
              {testimonies[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Glimpse.displayName = "Glimpse";
export default Glimpse;
