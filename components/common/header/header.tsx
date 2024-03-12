"use client";

import { useRouter } from "next/navigation";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@mui/material";

export function Header() {
  const [isAboutUsActive, setIsAboutUsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const router = useRouter();

  const onHumbergerListClick = (activeMenu: string, href?: string) => {
    setActiveMenu(activeMenu);

    if (activeMenu === "about") {
      setIsAboutUsActive(true);
    }

    if (href) {
      document.getElementById("humburger-close")?.click();
      router.push(href);
    }
  };

  return (
    <header className="text-md sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 !bg-[#1F2839]">
      <div className="container flex h-[64px] items-center px-2 md:px-6 lg:px-12">
        <div className="md:flex w-full justify-between">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-lg font-bold sm:inline-block">
              <Logo />
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <Navigation />
          </nav>
        </div>

        <Sheet>
          <SheetTrigger>
            <div className="md:hidden text-[#FFF]">
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 5H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-[#FFF]">
            <div>
              <ul className="text-lg mt-4 text-[#1F2839] flex flex-col gap-2">
                <li
                  className={`px-4 cursor-pointer py-2 rounded ${activeMenu === "home" && "bg-[#1F2839] text-[#FFF]"}`}
                  onClick={() => onHumbergerListClick("home", "/")}
                >
                  Home
                </li>
                <li
                  className={`flex flex-col justify-between items-start rounded`}
                  onClick={() => {
                    setIsAboutUsActive((state) => !state);
                    setActiveMenu("about");
                  }}
                >
                  <div
                    className={`cursor-pointer ${isAboutUsActive && "bg-[#1F2839] text-[#FFF]"} flex gap-2 justify-between items-center px-4 py-2 rounded w-full`}
                  >
                    About Us{" "}
                    {isAboutUsActive ? (
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 5L5 0L10 5H0Z" fill="white" />
                      </svg>
                    ) : (
                      <svg
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L5 5L10 0H0Z" fill="#363E4D" />
                      </svg>
                    )}
                  </div>
                  {isAboutUsActive && (
                    <ul className="transition ease-in-out duration-300 px-4 py-2 bg-[#EDEEF0] w-full rounded flex flex-col gap-4">
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
                          onHumbergerListClick(
                            "about",
                            "/about-us/alssa-gallery",
                          );
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
                  Product
                </li>
                <li
                  className={`cursor-pointer px-4 py-2 rounded ${activeMenu === "contact-us" && "bg-[#1F2839] text-[#FFF]"}`}
                  onClick={() =>
                    onHumbergerListClick("contact-us", "/contact-us")
                  }
                >
                  Contact Us
                </li>
              </ul>
            </div>
            <SheetClose asChild>
              <Button className="hidden" id="humburger-close" />
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
