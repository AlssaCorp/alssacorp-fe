"use client";

import SectionTitleStyle1 from "@/components/common/section-title/section-title-style-1";
import { Card, CardContent } from "@/components/ui/card";
import { Certificate } from "@/dao/homepage";
import getImageUrl from "@/utils/getImageUrl";
import Image from "next/image";
import React, { FC } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

interface CertificationProps {
  certificates: Certificate[];
}

const Certification: FC<CertificationProps> = ({ certificates }) => {
  return (
    <div className="bg-[#1F283911]">
      <div className="py-8 container px-4 sm:px-8 lg:px-16">
        <SectionTitleStyle1 line1="Company" line2="Certifications" />
        <div className="hidden md:grid grid-cols-3 gap-12 text-center">
          {certificates.map((certificate, index) => (
            <Card
              key={`${index} ${certificate.name}`}
              className="aspect-square flex items-center justify-center p-0"
            >
              <CardContent className="p-0">
                <Image
                  src={getImageUrl(certificate.image)}
                  width={400}
                  height={400}
                  alt={`Card ${index + 1}`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="block md:hidden">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide
                key={`${index} ${certificate.name}`}
                className="flex items-center justify-center p-0 mb-8"
              >
                <CardContent className="p-0 flex justify-center items-center">
                  <Image
                    src={getImageUrl(certificate.image)}
                    width={400}
                    height={400}
                    alt={`Card ${index + 1}`}
                  />
                </CardContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

Certification.displayName = "Certification";
export default Certification;
