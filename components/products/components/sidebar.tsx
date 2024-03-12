import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";

interface SidebarProps {
  brands: string[];
  subCategory: string[];
  setFilteredBrands: Dispatch<SetStateAction<string[]>>;
  setFilteredSubCategory: Dispatch<SetStateAction<string[]>>;
}

const Sidebar: FC<SidebarProps> = ({
  brands,
  subCategory,
  setFilteredBrands,
  setFilteredSubCategory,
}) => {
  if (brands.length === 0 && subCategory.length === 0) {
    return <></>;
  }

  return (
    <div className="hidden md:flex flex-col gap-2 bg-[#1E29390D] rounded-lg w-[300px] p-4">
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

Sidebar.displayName = "Sidebar";
export default Sidebar;
