"use client";

import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import LocationIcon from "./components/location-icon";
import PhoneIcon from "./components/phone-icon";
import PrinterIcon from "./components/printer-icon";
import EmailIcon from "./components/email-icon";
import AlssaCorpIcon from "./components/alssacorp-icon";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-[#1F2839]">
      <div className="container grid md:grid-cols-2 text-[#FFF] px-4 sm:px-8 lg:px-16 text-sm w-full py-6">
        <div className="w-full md:w-1/2 pb-4 md:pb-0">
          <div className="relative flex justify-center">
            <AlssaCorpIcon />
            <p className="text-center w-full absolute bottom-0 font-bold">
              &#169; {getYear()} Alssa Corporindo
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center border-t pt-4 md:border-none md:pt-0">
          <div className="grid grid-cols-2 gap-2">
            <ContactInfoWrapper className="col-span-2">
              <div className="basis-8 w-full">
                <LocationIcon />
              </div>
              <div className="w-[calc(100%-32px)]">
                Rukan Tanjung Mas Raya, Jalan Raya Lenteng Agung BI No 3 RT 002
                RW001, Tanjung Barat Jagakarsa, Jakarta Selatan, DKI Jakarta
                12530
              </div>
            </ContactInfoWrapper>
            <ContactInfoWrapper className="col-span-2 md:col-span-1">
              <div className="basis-8">
                <PhoneIcon />
              </div>
              <span>+6221 8010035</span>
            </ContactInfoWrapper>
            <ContactInfoWrapper className="col-span-2 md:col-span-1">
              <div className="basis-8">
                <PrinterIcon />
              </div>
              <span>+6221 8010033</span>
            </ContactInfoWrapper>
            <ContactInfoWrapper className="col-span-2 md:col-span-1">
              <div className="basis-8">
                <EmailIcon />
              </div>
              <span>info@alssacorp.co.id</span>
            </ContactInfoWrapper>
          </div>
          <div className="flex gap-6 items-center justify-center md:justify-start mt-4 w-full border-b pb-3 md:border-none md:pb-0">
            <p className="text-[#BBB] hidden md:block">Social Media</p>
            <div
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/company/pt-alssa-corporindo/";
              }}
            >
              <LinkedInLogoIcon className="w-[18px] h-[18px] cursor-pointer" />
            </div>

            <div
              onClick={() => {
                window.location.href = "https://www.instagram.com/alssacorp/";
              }}
            >
              <InstagramLogoIcon className="w-[18px] h-[18px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactInfoWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactInfoWrapper({
  children,
  className,
}: ContactInfoWrapperProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>{children}</div>
  );
}
