"use client";

import Image from "next/image";
import { FC } from "react";

const WAIcon: FC = () => {
  return (
    <div
      className="fixed top-3/4 -translate-y-3/4 right-0 cursor-pointer z-[10] w-[80px] h-[80px]"
      onClick={() => (window.location.href = "https://wa.me/6281282610357")}
    >
      <Image fill sizes="80px" src="/img/icon/wa.png" alt="wa-icon" />
    </div>
  );
};

WAIcon.displayName = "Wa Icon";
export default WAIcon;
