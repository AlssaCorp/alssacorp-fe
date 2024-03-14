import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [isAboutUsActive, setIsAboutUsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const onHumbergerListClick = (activeMenu: string, href?: string) => {
    setActiveMenu(activeMenu);

    if (activeMenu === "about") {
      setIsAboutUsActive(true);
    }

    if (href) {
      setIsOpen(false);
      document.getElementById("humburger-close")?.click();
      router.push(href);
    }
  };

  return (
    <div
      className={`!z-40 fixed w-full fix ${isOpen ? "top-16 opacity-1" : "-top-64 opacity-0"} left-0 bg-[#FFF] transition-all duration-400 shadow-md`}
    >
      <ul className="text-lg p-4 text-[#1F2839] flex flex-col gap-2 w-full">
        <li
          className={`px-4 cursor-pointer py-2 rounded ${activeMenu === "home" && "bg-[#1F2839] text-[#FFF]"}`}
          onClick={() => onHumbergerListClick("home", "/")}
        >
          Home
        </li>
        <li
          className={`flex flex-col justify-between items-start rounded transition-all`}
          onClick={() => {
            setIsAboutUsActive((state) => !state);
            setActiveMenu("about");
          }}
        >
          <div
            className={`cursor-pointer transition-all duration-400 ${isAboutUsActive && "bg-[#1F2839] text-[#FFF]"} flex gap-2 justify-between items-center px-4 py-2 rounded w-full`}
          >
            About Us{" "}
            <div
              style={{
                transform: isAboutUsActive
                  ? "rotateX(180deg)"
                  : "rotateX(0deg)",
              }}
              className={`${isAboutUsActive && "origin-center"} transition-all duration-400`}
            >
              <TriangleDownIcon />
            </div>
          </div>
          {isAboutUsActive && (
            <ul
              className={`h-full transition-all duration-400 px-4 py-2 bg-[#EDEEF0] w-full rounded flex flex-col gap-4 ${!isAboutUsActive ? "h-0 opacity-0" : "h-full opacity-1"}`}
            >
              <li
                className="cursor-pointer"
                onClick={() => {
                  onHumbergerListClick("about", "/about-us");
                }}
              >
                About Alssa
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  onHumbergerListClick("about", "/about-us/alssa-gallery");
                }}
              >
                Alssa&apos;s Gallery
              </li>
            </ul>
          )}
        </li>
        <li
          className={`cursor-pointer px-4 py-2 rounded ${activeMenu === "products" && "bg-[#1F2839] text-[#FFF]"}`}
          onClick={() => onHumbergerListClick("products", "/products")}
        >
          Products
        </li>
        <li
          className={`cursor-pointer px-4 py-2 rounded ${activeMenu === "contact-us" && "bg-[#1F2839] text-[#FFF]"}`}
          onClick={() => onHumbergerListClick("contact-us", "/contact-us")}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
};

MobileNavbar.displayName = "MobileNavbar";
export default MobileNavbar;
