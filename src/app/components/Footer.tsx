import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface Socialmenu {
  icon: React.ReactNode;
  path: string;
}

interface TechnicalSkill {
  name: string;
  path: string;
}

interface NavMenu {
  title: string;
  path: string;
  delay?: string;
}

const navMenu: NavMenu[] = [
  {
    title: "Home",
    path: "/",
    delay: "0",
  },
  {
    title: "About",
    path: "/about",
    delay: "50",
  },
  {
    title: "Blog",
    path: "/blog",
    delay: "60",
  },
  {
    title: "Contact Us",
    path: "/contact",
    delay: "70",
  },
];

const socialMenu: Socialmenu[] = [
  {
    icon: <FaFacebookSquare />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaSquareXTwitter />,
    path: "",
  },
  {
    icon: <FaInstagramSquare />,
    path: "",
  },
];

const technicalSkills: TechnicalSkill[] = [
  { name: "Computer Programming", path: "/" },
  { name: "Web Development", path: "/" },
  { name: "Graphics Design", path: "/" },
  { name: "Video Editing", path: "/" },
  { name: "UI/UX Design", path: "/" },
];

const Footer = () => {
  return (
    <footer className="p-5 py-10 lg:p-20 bg-cascade-gray-100 font-source">
      <div className="pb-20 flex md:flex-row flex-col gap-y-10 gap-x-20">
        <div className="flex flex-col gap-y-3.5">
          <h3 className="text-black text-xl font-semibold font-source">
            Technical Skills
          </h3>
          <ul className="flex flex-col gap-y-2.5">
            {technicalSkills.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-[#1f1f1f] font-normal text-sm transition-all ease-in duration-200 hover:underline w-fit"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-3.5">
          <h3 className="text-black text-xl font-semibold font-source">
            Learn About Us
          </h3>
          <ul className="flex flex-col gap-y-2.5">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-[#1f1f1f] font-normal text-sm transition-all ease-in duration-200 hover:underline w-fit"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-[0.5px] border-cascade-gray-150 flex md:flex-row flex-col-reverse gap-y-3.5 items-center justify-between pt-14">
        <p className="text-sm text-black font-normal">
          © 2025 Coursera Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-x-5">
          {socialMenu.map((item, index) => (
            <Link href={item.path} key={index} className="w-7 h-7 text-[28px]">
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
