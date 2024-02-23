import { Card, CardContent } from "@/components/ui/card";
import { Certificate } from "@/dao/homepage";
import Image from "next/image";
import React, { FC } from "react";

interface CertificationProps {
  certificates: Certificate[];
}

const Certification: FC<CertificationProps> = ({ certificates }) => {
  return (
    <div className="bg-[#1F283911]">
      <div className="py-8  container px-16">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Company</h1>
          <h1 className="font-black">Certifications</h1>
        </div>
        <div className="grid grid-cols-3 gap-12 text-center">
          {certificates.map((certificate, index) => (
            <Card
              key={`${index} ${certificate.name}`}
              className="aspect-square flex items-center justify-center p-0"
            >
              <CardContent className="p-0">
                <Image
                  src={certificate.image}
                  width={400}
                  height={400}
                  alt={`Card ${index + 1}`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CertificationItem {
  children: React.ReactNode;
  src: string;
  key: string | number;
}

export function CertificationItem() {
  return <div></div>;
}

Certification.displayName = "Certification";
export default Certification;
