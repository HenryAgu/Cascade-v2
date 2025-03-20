import Image from "next/image";
import Link from "next/link";
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
  return (
    <nav className="fixed top-0 left-0 right-0 drop-shadow-md bg-white font-source">
      <div className="container mx-auto py-5 px-20 flex items-center justify-between">
        <div className="">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={132}
            height={32}
            className="h-[32px] aspect-[132/32]"
          />
        </div>
        <div className="flex items-center gap-x-10">
          {navMenu.map((item, index) => (
            <Link href={item.path} key={index} className="text-sm font-normal text-primary hover:text-brand-blue">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
