"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 drop-shadow-md bg-white font-source">
      <div className="container mx-auto py-5 px-5 lg:px-20 flex items-center justify-between">
        <Link href="/" className="shrink-0 focus:outline-0">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={132}
            height={32}
            className="h-[28px] lg:h-[32px] lg:w-fit aspect-[108/32] lg:aspect-[132/32]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          aria-label="Site Nav"
          className="hidden lg:flex items-center gap-x-10"
        >
          <ul className="flex items-center gap-x-10">
            {navMenu.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`text-sm ${
                  item.path === linkActive
                    ? "text-[#0634e9] font-medium"
                    : "text-[#5b6780] font-normal"
                } hover:text-[#0634e9]`}
              >
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
          <Link
            href="/contact"
            className="border border-[#0634e9] text-[#0056d2] text-sm font-medium rounded-md py-2 px-3"
          >
            Start Learning
          </Link>
        </nav>

        {/* Mobile menu icon */}
        <div className="outline-transparent block lg:hidden">
          <button
            className="text-sm text-[#5b6780] font-normal"
            onClick={toggleMenu}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          aria-label="Mobile Nav"
          className="absolute top-0 bg-white h-fit z-50 w-full animate-in animate-out"
        >
          <div className="drop-shadow-md p-5 flex items-center justify-between">
            <div />
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={108}
              height={28}
              className="h-[28px] aspect-[108/32]"
            />
            <button onClick={toggleMenu}>Close</button>
          </div>
          <div className="p-5">
            <ul className="flex flex-col gap-y-5">
              {navMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`text-base font-normal 
              ${
                item.path === linkActive
                  ? "text-[#0634e9] font-medium"
                  : "text-[#5b6780] font-normal"
              }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <Link
                href="/contact"
                className="mt-10 border border-[#0634e9] text-white bg-[#0056d2] text-base text-center font-medium rounded-md py-3 px-6 animate-in slide-in-from-top duration-500"
              >
                Start Learning
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
