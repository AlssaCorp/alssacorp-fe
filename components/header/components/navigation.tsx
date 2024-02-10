"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const routes = useRouter();

  const handleAboutUseClick = (path: string) => {
    document.getElementById("about-us-btn")?.click();
    routes.push(path);
  };

  return (
    <NavigationMenu className="text-[#fff] !text-md">
      <NavigationMenuList>
        <NavigationItem text="Home" href="/" />
        <NavigationMenuItem>
          <Popover>
            <PopoverTrigger
              id="about-us-btn"
              className="px-[16px] py-[8px] text-md font-medium flex gap-2 items-center"
            >
              About Us
              <TriangleDownIcon />
            </PopoverTrigger>
            <PopoverContent className="w-fit px-0 bg-[#D9D9D9] text-[#19253E] font-bolder py-2 text-md">
              <div className="flex flex-col w-full justify-center">
                <div
                  onClick={() => handleAboutUseClick("/about-us")}
                  className="text-center mb-1 px-4 cursor-pointer"
                >
                  About Alssa
                </div>
                <div
                  onClick={() =>
                    handleAboutUseClick("/about-us/message-from-ceo")
                  }
                  className="text-center border-y-2 py-1 border-[#ADBBD7] px-4 cursor-pointer"
                >
                  Message From CEO
                </div>
                <div
                  onClick={() => handleAboutUseClick("/about-us/alssa-gallery")}
                  className="text-center mt-1 px-4 cursor-pointer"
                >
                  Alssa&apos;s Gallery
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavigationMenuItem>
        <NavigationItem href="products" text="Products" />
        <NavigationItem href="contact-us" text="Contact Us" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface NavigationItemProps {
  href: string;
  text: string;
}

const NavigationItem = ({ href, text }: NavigationItemProps) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          style={{ fontWeight: "500" }}
        >
          <p style={{ fontSize: "16px" }}>{text}</p>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
