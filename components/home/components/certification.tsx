import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Certification() {
  return (
    <div className="bg-[#1F283911]">
      <div className="py-8  container px-10">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Company</h1>
          <h1 className="font-black">Certifications</h1>
        </div>
        <div className="grid grid-cols-3 gap-12 text-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="aspect-square flex items-center justify-center"
            >
              <CardContent>
                <Image
                  src="/img/total-logo.png"
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
}

interface CertificationItem {
  children: React.ReactNode;
  src: string;
  key: string | number;
}

export function CertificationItem() {
  return <div></div>;
}
