import React, { FC } from "react";

const HamburgerIcon: FC = () => {
  return (
    <div
      className={`w-6 h-0.5 rounded-full before:content-[''] before:absolute before:w-6 before:h-0.5 before:rounded-lg before:bg-[#FFF] before:transition-all before:duration-[400] before:delay-150 before:-translate-y-[8px] after:content-[''] after:absolute after:w-6 after:h-0.5 after:rounded-lg after:bg-[#FFF] after:delay-150 after:transition-all after:duration-[400] after:translate-y-[8px] }`}
      style={{ transition: "all 0.4s ease-in-out" }}
    />
  );
};
export default HamburgerIcon;
