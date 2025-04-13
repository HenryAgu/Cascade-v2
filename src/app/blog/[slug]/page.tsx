"use client";
import JustInBlogs from "@/app/components/Blog/JustInBlogs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const BlogPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const OurVisionImage = "/images/learning.jpg";
  return (
    <>
      <main className="min-h-screen pt-16 lg:pt-28 pb-5 lg:pb-20 px-5 lg:px-14 xl:px-20 font-source bg-white container mx-auto w-full overflow-x-hidden">
        <div className="w-full mx-auto lg:w-[80%] py-10">
          <div className="flex flex-col items-center lg:items-start gap-y-0.5 lg:gap-y-3.5 w-full">
          <h1 className="text-black2 font-bold text-[32px] lg:leading-14 lg:text-5xl text-center lg:text-left capitalize w-full break-words">
              {slug}
            </h1>
            <div className="flex items-center gap-x-3.5">
              <span className="text-sm lg:text-[15px] font-semibold text-black">
                By Henry Agu
              </span>
              <span className="text-cascade-gray-200 text-xs lg:text-sm font-normal">
                March 14, 2025
              </span>
            </div>
          </div>
          <Image
            src={OurVisionImage}
            alt="blog_image"
            width={720}
            height={480}
            className="lg:w-[80%] w-full h-[245px] md:h-[350px] lg:h-[480px] object-cover my-5 lg:my-10"
          />
          <div className="w-full lg:w-[80%] mt-14 lg:mt-32">
            <p className="first-letter:text-[66px] text-lg lg:text-xl font-normal leading-9 lg:leading-10 text-black2 first-letter:font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              aliquam qui veritatis magni dignissimos doloribus necessitatibus
              itaque voluptas excepturi laborum tenetur quia asperiores saepe
              ipsam quis, esse eius voluptates? Similique pariatur perferendis
              dolorem maiores repudiandae a dolores possimus tempore fugiat?
              Eveniet commodi tempore aut in. Aspernatur alias perferendis
              dolorem, sint nemo praesentium in voluptatum. Modi laboriosam
              nihil commodi ut perspiciatis, accusantium magni facilis error
              asperiores ullam qui ratione quo minima! Quos facilis eos
              similique ab aliquam. Voluptates autem placeat temporibus in! At
              mollitia odio adipisci architecto maxime repellendus minima
              laboriosam velit, error, fuga est incidunt cumque earum sint
              aliquid nesciunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Hic aliquam qui veritatis magni dignissimos
              doloribus necessitatibus itaque voluptas excepturi laborum tenetur
              quia asperiores saepe ipsam quis, esse eius voluptates? Similique
              pariatur perferendis dolorem maiores repudiandae a dolores
              possimus tempore fugiat? Eveniet commodi tempore aut in.
              Aspernatur alias perferendis dolorem, sint nemo praesentium in
              voluptatum. Modi laboriosam nihil commodi ut perspiciatis,
              accusantium magni facilis error asperiores ullam qui ratione quo
              minima! Quos facilis eos similique ab aliquam. Voluptates autem
              placeat temporibus in! At mollitia odio adipisci architecto maxime
              repellendus minima laboriosam velit, error, fuga est incidunt
              cumque earum sint aliquid nesciunt?
            </p>
          </div>
        </div>
      </main>
      <JustInBlogs />
    </>
  );
};

export default BlogPage;
