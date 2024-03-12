"use client";

import SectionTitleStyle1 from "@/components/common/section-title/section-title-style-1";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function AboutAlssa() {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="py-8 container px-4 sm:px-8 lg:px-16">
      <SectionTitleStyle1 line1="About" line2="AlssaCorp" />
      <div className="flex flex-col gap-4 text-[#253961] text-justify">
        <p>
          Alssa Corp is a dynamic and forward-thinking technology company that
          is committed to shaping the future through innovation and cutting-edge
          solutions. With a passion for leveraging technology to drive positive
          change, we aim to empower businesses and individuals to thrive in the
          digital era.
        </p>
        <div className="md:hidden">
          {isReadMore && (
            <div className="flex flex-col gap-4">
              <p>
                Founded on the principles of excellence and integrity in 1990 by
                Mr. HSU Sugiarto, Alssa Corp has established itself as a trusted
                leader in the trunking provider landscape. We believe in pushing
                the boundaries of what is possible and constantly challenging
                ourselves to deliver solutions that exceed expectations. Alssa
                Corp received the title as National Provider Trunking Company in
                2011. As a Nationwide Trunking Provider Company, Alssa Corp was
                keen on improving their quality and expanding network. With
                that, Alssa Corp has successfully broaden their existence.{" "}
              </p>
              <p>
                Collaboration is at the heart of our approach. We actively seek
                partnerships and collaborations with industry leaders, academic
                institutions, and forward-thinking organizations to foster an
                environment of knowledge exchange and innovation. Through these
                collaborations, we aim to drive collective progress and address
                complex challenges in today&apos;s rapidly evolving digital
                landscape.
              </p>
            </div>
          )}
          <div className="font-bold flex gap-2 items-center justify-end w-full">
            <p
              onClick={() => setIsReadMore((state) => !state)}
              className="cursor-pointer"
            >
              {isReadMore ? <>Read Less</> : <>Read More</>}
            </p>
            <ArrowRightIcon />
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <p>
            Founded on the principles of excellence and integrity in 1990 by Mr.
            HSU Sugiarto, Alssa Corp has established itself as a trusted leader
            in the trunking provider landscape. We believe in pushing the
            boundaries of what is possible and constantly challenging ourselves
            to deliver solutions that exceed expectations. Alssa Corp received
            the title as National Provider Trunking Company in 2011. As a
            Nationwide Trunking Provider Company, Alssa Corp was keen on
            improving their quality and expanding network. With that, Alssa Corp
            has successfully broaden their existence.{" "}
          </p>
          <p>
            Collaboration is at the heart of our approach. We actively seek
            partnerships and collaborations with industry leaders, academic
            institutions, and forward-thinking organizations to foster an
            environment of knowledge exchange and innovation. Through these
            collaborations, we aim to drive collective progress and address
            complex challenges in today&apos;s rapidly evolving digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
