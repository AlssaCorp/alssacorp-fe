"use client";

import { useState } from "react";
import Logo from "./components/logo";
import MobileNavbar from "./components/mobile-navbar";
import Navigation from "./components/navigation";
import WrapperHamburger from "./components/wrapper-humberger";
import HumbergerIcon from "./components/humberger-icon";

export function Header() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <>
      <header className="text-md z-50 sticky top-0 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 !bg-[#1F2839]">
        <div className="container flex h-[64px] items-center px-2 md:px-6 lg:px-12 !z-50">
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

          <WrapperHamburger
            onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
            open={isMobileNavbarOpen}
          >
            <HumbergerIcon />
          </WrapperHamburger>
        </div>
      </header>
      <MobileNavbar
        isOpen={isMobileNavbarOpen}
        setIsOpen={setIsMobileNavbarOpen}
      />
    </>
  );
}
