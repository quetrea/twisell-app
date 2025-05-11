"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Poppins } from "next/font/google";

import { NavbarSidebar } from "./navbar-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);


  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          Twisell
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-r-0 border-b-0 px-12 rounded-none bg-white h-full hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href={"/sign-in"}>Log in</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-r-0 border-b-0 px-12 rounded-none hover:bg-pink-400 h-full bg-black transition-colors text-white hover:text-black text-lg"
        >
          <Link href={"/sign-up"}>Start selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button variant={"ghost"} className="size-12 border-transparent bg-white"
        onClick={()=> setIsMobileSidebarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
