import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { FC } from "react";

interface FilterCheckProps {
  id: string;
  text: string;
  onClick: (checked: CheckedState) => void;
}

const FilterCheckBox: FC<FilterCheckProps> = ({ id, text, onClick }) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={id}
        className="border-[#BAC7D5]"
        onCheckedChange={onClick}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-medium text-[#253961]"
        >
          {text}
        </label>
      </div>
    </div>
  );
};

FilterCheckBox.displayName = "Filter Check Box";

export default FilterCheckBox;
