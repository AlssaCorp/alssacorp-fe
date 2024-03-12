import { FC } from "react";

interface SectionTitleStyle1Props {
  line1: string;
  line2: string;
}

const SectionTitleStyle1: FC<SectionTitleStyle1Props> = ({ line1, line2 }) => {
  return (
    <div className="text-2xl md:text-3xl pb-8 flex flex-col text-center md:text-start">
      <h1 className="hidden md:block font-normal">{line1}</h1>
      <h1 className="font-bold md:font-black">
        <span className="md:hidden">{line1}</span> {line2}
      </h1>
    </div>
  );
};

SectionTitleStyle1.displayName = "SectionTitleStyle1";
export default SectionTitleStyle1;
