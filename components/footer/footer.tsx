import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
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
      <div className="container grid grid-cols-2 text-[#FFF] px-10 text-sm w-full  py-6">
        <div className="w-1/2">
          <div className="relative flex justify-center">
            <AlssaCorpIcon />
            <p className="text-center w-full absolute bottom-0 font-bold">
              &#169; {getYear()} Alssa Corporindo
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-2">
            <ContactInfoWrapper className="col-span-2 flex gap-2">
              <div>
                <LocationIcon />
              </div>
              Rukan Tanjung Mas Raya, Jalan Raya Lenteng Agung BI No 3 RT 002
              RW001, Tanjung Barat Jagakarsa, Jakarta Selatan, DKI Jakarta 12530
            </ContactInfoWrapper>
            <ContactInfoWrapper>
              <div>
                <PhoneIcon />
              </div>
              <span>+6221 8010035</span>
            </ContactInfoWrapper>
            <ContactInfoWrapper>
              <div>
                <PrinterIcon />
              </div>
              <span>+6221 8010033</span>
            </ContactInfoWrapper>
            <ContactInfoWrapper>
              <div>
                <EmailIcon />
              </div>
              <span>info@alssacorp.co.id</span>
            </ContactInfoWrapper>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <p>Social Media</p>
            <LinkedInLogoIcon className="w-[18px] h-[18px]" />
            <InstagramLogoIcon className="w-[18px] h-[18px]" />
            <TwitterLogoIcon className="w-[18px] h-[18px]" />
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
