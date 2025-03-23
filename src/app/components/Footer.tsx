import Link from "next/link";
import React from "react";
import { FaFacebookSquare,FaLinkedin,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface Socialmenu{
    icon: React.ReactNode;
    path: string;
}

const socialMenu:Socialmenu[] = [
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
]

const Footer = () => {
  return (
    <footer className="p-5 lg:p-20 bg-cascade-gray-100 font-source">
      <div className="border-t-[0.5px] border-cascade-gray-150 flex items-center justify-between pt-14">
        <p className="text-sm text-black font-normal">© 2025 Coursera Inc. All rights reserved.</p>
        <div className="flex items-center gap-x-5">
          {socialMenu.map((item,index)=>(
            <Link href={item.path} key={index} className="w-7 h-7 text-[28px]">{item.icon}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
