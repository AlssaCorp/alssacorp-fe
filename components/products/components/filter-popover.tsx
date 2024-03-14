import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import FilterCheckBox from "./sidebar-checkbox";
import FilterIconActive from "./filter-icon-actiove";

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
  const filterRef = useRef<HTMLButtonElement | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const button = filterRef.current;
    if (!button) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "aria-expanded"
        ) {
          setIsFilterOpen(button.getAttribute("aria-expanded") === "true");
        }
      });
    });

    observer.observe(button, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Popover>
      <PopoverTrigger ref={filterRef} id="popover-filter-btn">
        <FilterIconActive active={isFilterOpen} />
      </PopoverTrigger>
      <PopoverContent>
        <div className="md:hidden flex flex-col gap-2 rounded-lg p-2 mr-2">
          {brands.length > 0 && (
            <div className="text-lg font-bold text-[#253961]">Brand</div>
          )}
          {brands.map((brand) => (
            <div key={brand}>
              <FilterCheckBox
                id={`${brand}-mobile`}
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
                id={`${category}-mobile`}
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

export default FilterPopover;
