interface WrapperHumbergerIconProps {
  onClick: () => void;
  open: Boolean;
  children: React.ReactNode;
}

import React, { FC } from "react";

const WrapperHamburger: FC<WrapperHumbergerIconProps> = ({
  onClick,
  open,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ transition: "all 0.1s ease-in-out" }}
      className={`z-[100] flex justify-center items-center w-fit h-9 md:hidden flex relative [&>*:nth-child(1)]:bg-[#FFF] ${
        open &&
        "[&>*:nth-child(1)]:-translate-x-[45px] [&>*:nth-child(1)]:!bg-transparent [&>*:nth-child(1)]:before:rotate-45 [&>*:nth-child(1)]:before:translate-x-[45px] [&>*:nth-child(1)]:before:translate-y-0 [&>*:nth-child(1)]:after:-rotate-45 [&>*:nth-child(1)]:after:translate-x-[45px] [&>*:nth-child(1)]:after:-translate-y-0"
      }`}
    >
      {children}
    </div>
  );
};

export default WrapperHamburger;
