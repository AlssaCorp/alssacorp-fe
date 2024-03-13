import { Dispatch, FC, SetStateAction } from "react";
import FilterCheckBox from "./sidebar-checkbox";

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
          <FilterCheckBox
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
          <FilterCheckBox
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

Sidebar.displayName = "Sidebar";
export default Sidebar;
