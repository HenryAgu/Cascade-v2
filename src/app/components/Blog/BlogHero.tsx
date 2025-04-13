import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogHero = () => {
  const OurVisionImage = "/images/learning.jpg";
  return (
    <section className="flex lg:flex-row flex-col gap-y-14 gap-x-8 font-source pb-20 w-full mx-auto lg:w-[85%] xl:w-[75%] lg:px-5 px-0">
      <div className="basis-[60%] relative">
        <Image
          src={OurVisionImage}
          alt="vision_image"
          width={600}
          height={551}
          className="relative lg:rounded-md w-full h-[600px] lg:h-[551px] object-cover"
        />
        <div className="absolute bottom-0 left-0 lg:p-5 p-0 text-white">
          <Link
            href="/blog/mrs-babe"
            className="bg-white text-black2 p-5 lg:rounded-md flex flex-col gap-y-3.5 lg:gap-y-5 group"
          >
            <h4 className="text-3xl lg:text-[34px] font-bold text-black2 leading-9 lg:leading-10 line-clamp-2 transition-all duration-200 ease-in group-hover:underline">
              1 Hour of Screen Time at Bedtime Reduces Sleep by 24 Minutes,
              Study…
            </h4>
            <p className="line-clamp-4 lg:text-lg font-normal text-black text-base">
              If you can&apos;t resist your phone, there are settings you can
              activate to minimize these effects. If you can&apos;t resist your
              phone, there are settings you can activate to minimize these
              effects. If you can&apos;t resist your phone, there are settings
              you can activate to minimize these effects.
            </p>
          </Link>
        </div>
      </div>
      <div className="basis-[40%] rounded-md">
        <Image
          src={OurVisionImage}
          alt="vision_image"
          width={345}
          height={300}
          className="w-full h-[300px] lg:rounded-tl-md lg:rounded-tr-md"
        />
        <Link href="" className="p-4 lg:p-5 flex flex-col gap-y-5 bg-cascade-gray-100 group transition duration-200 ease-in">
          <h4 className="text-[34px] font-bold text-black2 leading-10 line-clamp-2 group-hover:underline">
            1 Hour of Screen Time at Bedtime Reduces Sleep by 24 Minutes, Study…
          </h4>
          <p className="line-clamp-4 lg:text-lg font-normal text-black text-base">
            If you can&apos;t resist your phone, there are settings you can
            activate to minimize these effects. If you can&apos;t resist your
            phone, there are settings you can activate to minimize these
            effects. If you can&apos;t resist your phone, there are settings you
            can activate to minimize these effects.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default BlogHero;
