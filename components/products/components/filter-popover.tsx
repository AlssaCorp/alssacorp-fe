import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckedState } from "@radix-ui/react-checkbox";
import { FilterIcon } from "lucide-react";
import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";

interface FilterPopoverProps {
  brands: string[];
  subCategory: string[];
  setFilteredBrands: Dispatch<SetStateAction<string[]>>;
  setFilteredSubCategory: Dispatch<SetStateAction<string[]>>;
}

const FilterPopover: FC<FilterPopoverProps> = ({
  brands,
  subCategory,
  setFilteredBrands,
  setFilteredSubCategory,
}) => {
  return (
    <Popover>
      <PopoverTrigger id="popover-filter-btn"></PopoverTrigger>
      <PopoverContent>
        <div className="md:hidden flex flex-col gap-2 rounded-lg p-2 mr-2">
          {brands.length > 0 && (
            <div className="text-lg font-bold text-[#253961]">Brand</div>
          )}
          {brands.map((brand) => (
            <div key={brand}>
              <Check
                id={brand}
                text={brand}
                onClick={() => {
                  setFilteredBrands((state) => {
                    if (state.includes(brand)) {
                      return state.filter((val) => val != brand);
                    } else {
                      return [...state, brand];
                    }
                  });
                }}
              />
            </div>
          ))}
          {subCategory.length > 0 && (
            <div className="text-lg font-bold text-[#253961]">Sub Category</div>
          )}
          {subCategory.map((category) => (
            <div key={category}>
              <Check
                id={category}
                text={category}
                onClick={() => {
                  setFilteredSubCategory((state) => {
                    if (state.includes(category)) {
                      return state.filter((val) => val != category);
                    } else {
                      return [...state, category];
                    }
                  });
                }}
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

interface CheckProps {
  id: string;
  text: string;
  onClick: (checked: CheckedState) => void;
}

function Check({ id, text, onClick }: CheckProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={id}
        value={0}
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
}

export default FilterPopover;
