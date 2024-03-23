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
import { FC, useEffect, useState } from "react";
import { Testimony } from "@/dao/homepage";
import getImageUrl from "@/utils/getImageUrl";
import SectionTitleStyle1 from "@/components/common/section-title/section-title-style-1";

interface GlimpseProps {
  testimonies: Testimony[];
}

const Glimpse: FC<GlimpseProps> = ({ testimonies }) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      const newSlidesPerView =
        width < 768
          ? 1
          : testimonies.length <= 5
            ? testimonies.length < 3
              ? 1
              : 3
            : 5;
      setSlidesPerView(newSlidesPerView);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [testimonies.length]);

  return (
    <div className="py-8">
      <div className="bg-[#1F283911]">
        <div className="py-8 container px-4 sm:px-8 lg:px-16">
          <SectionTitleStyle1
            line1="Glimpse of"
            line2="Our Satisfied Clients"
          />
          {testimonies.length > 0 && (
            <div>
              <Swiper
                loop={true}
                centeredSlides={true}
                modules={[Navigation, A11y, EffectFade, Autoplay]}
                slidesPerView={slidesPerView}
                initialSlide={0}
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={(e) => setActiveIndex(e.realIndex)}
                className="h-full w-full max-w-[1200px] relative"
              >
                {testimonies.map((testimony, id) => (
                  <div className="!h-[350px]" key={`${id} ${testimony.brand}`}>
                    <SwiperSlide
                      className={`!flex !justify-center w-full items-center mb-8 ${id === activeIndex && "z-[1]"}`}
                      key={`${id} ${testimony.brand}`}
                    >
                      <div
                        className={`flex p-14 !h-[300px] aspect-square md:p-12 ${id === activeIndex ? "p-14 md:p-4 md:border-b-[6px] border-[#1F2839]" : "md:!pt-4"}`}
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
          )}
          {testimonies.length > 0 && (
            <div className="hidden md:block">
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
          )}
        </div>
      </div>
    </div>
  );
};

Glimpse.displayName = "Glimpse";
export default Glimpse;
