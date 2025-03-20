"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavMenu {
  title: string;
  path: string;
}

const navMenu: NavMenu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const linkActive = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 drop-shadow-md bg-white font-source">
      <div className="container mx-auto py-5 px-20 flex items-center justify-between">
        <Link href="/" className="">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={132}
            height={32}
            className="h-[32px] w-fit aspect-[132/32]"
          />
        </Link>
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-10">
            {navMenu.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`text-sm ${
                  item.path === linkActive ? "text-[#0634e9] font-medium" : "text-[#5b6780] font-normal"
                } hover:text-[#0634e9]`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="border border-[#0634e9] text-[#0056d2] text-sm font-medium rounded-md py-2 px-3"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
