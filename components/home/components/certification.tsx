import React from "react";

export default function Certification() {
  return (
    <div className="bg-[#1F283911]">
      <div className="py-8  container px-10">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Company</h1>
          <h1 className="font-black">Certifications</h1>
        </div>
        <div className="grid grid-cols-3 gap-8"></div>
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
