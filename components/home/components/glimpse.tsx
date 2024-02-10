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
import { useRef, useState } from "react";

const clients = [
  { icon: "/img/pertamina-logo.png", key: "1" },
  { icon: "/img/badaklng-logo.png", key: "2" },
  { icon: "/img/total-logo.png", key: "3" },
  { icon: "/img/pertamina-logo.png", key: "4" },
  { icon: "/img/badaklng-logo.png", key: "5" },
  { icon: "/img/total-logo.png", key: "6" },
];

export default function Glimpse() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-8">
      <div className="bg-[#1F283911]">
        <div className="py-8 container px-10">
          <div className="text-3xl pb-8">
            <h1 className="font-normal">Glimpse</h1>
            <h1 className="font-black">of Our Satisfied Clients</h1>
          </div>
          <div className="flex justify-center">
            <Swiper
              loop={true}
              centeredSlides={true}
              modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={(e) => setActiveIndex(e.realIndex)}
              className="flex h-full w-full justify-center items-center max-w-[1200px] relative"
            >
              {clients.map((client, id) => (
                <div className="!h-[350px]" key={client.key}>
                  <SwiperSlide className="!flex !justify-center w-full items-center mb-8">
                    <div
                      className={`flex !h-[300px] aspect-square p-12 ${id === activeIndex && "!p-2"}`}
                    >
                      <Image
                        src={client.icon}
                        width={id === activeIndex ? 300 : 250}
                        height={id === activeIndex ? 300 : 250}
                        alt={`icon-${id}`}
                      />
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
          <div className="pt-8">
            <p className="font-semibold italic text-center">
              Provision Of Radio Trunking System, Subscriber, ITS Supporting
              Infrastructure at PT Badak NGL
            </p>
          </div>
          <div className="pt-8 w-full flex justify-center">
            <p className="max-w-[1200px]">
              With a track record of excellence and innovation, Alssa Corporindo
              Services has been entrusted with the task of implementing
              cutting-edge communication systems at PT Badak NGL. Through their
              expertise and commitment to delivering reliable and efficient
              solutions, Alssa Corporindo Services aims to enhance the
              communication infrastructure at PT Badak NGL, enabling seamless
              connectivity and optimized operations for their clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
