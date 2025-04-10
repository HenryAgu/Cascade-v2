"use client";
import { usePathname } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  return (
    <main className="min-h-screen pt-16 lg:pt-28 pb-5 lg:pb-20 px-5 lg:px-20 font-source bg-white container mx-auto w-full">
      {slug}
    </main>
  );
};

export default BlogPage;
