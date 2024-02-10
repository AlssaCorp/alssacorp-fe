"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TriangleDownIcon } from "@radix-ui/react-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu className="text-[#fff]">
      <NavigationMenuList>
        <NavigationItem text="Home" href="/" />
        <NavigationMenuItem>
          <Popover>
            <PopoverTrigger className="px-[16px] py-[8px] text-sm font-medium flex gap-2 items-center">
              About Us
              <TriangleDownIcon />
            </PopoverTrigger>
            <PopoverContent className="w-fit px-0 bg-[#D9D9D9] text-[#19253E] font-bolder py-2 text-sm">
              <div className="flex flex-col w-full justify-center">
                <Link href="/about-us" className="text-center mb-1 px-4">
                  About Alssa
                </Link>
                <Link
                  href="/about-us/about-alssa"
                  className="text-center border-y-2 py-1 border-[#ADBBD7] px-4"
                >
                  Message From CEO
                </Link>
                <Link
                  href="/about-us/about-alssa"
                  className="text-center mt-1 px-4"
                >
                  Alssa&apos;s Gallery
                </Link>
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
          {text}
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
