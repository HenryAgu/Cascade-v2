import Image from "next/image";
import React from "react";

const BlogHero = () => {
  const OurVisionImage = "/images/learning.jpg";
  return (
    <section className="flex lg:flex-row flex-col gap-y-14 gap-x-8 font-source pb-20 w-full mx-auto lg:w-[75%] lg:px-5 px-0">
      <div className="basis-[60%] relative">
        <Image
          src={OurVisionImage}
          alt="vision_image"
          width={600}
          height={551}
          className="relative lg:rounded-md w-full h-[600px] lg:h-[551px] object-cover"
        />
        <div className="absolute bottom-0 left-0 lg:p-5 p-0 text-white">
          <div className="bg-white text-black2 p-5 lg:rounded-md flex flex-col gap-y-3.5 lg:gap-y-5">
            <h4 className="text-3xl lg:text-[34px] font-bold text-black2 leading-9 lg:leading-10 line-clamp-2">
              1 Hour of Screen Time at Bedtime Reduces Sleep by 24 Minutes,
              Study…
            </h4>
            <p className="line-clamp-4 lg:text-lg font-normal text-black text-base">
              If you can't resist your phone, there are settings you can
              activate to minimize these effects. If you can't resist your
              phone, there are settings you can activate to minimize these
              effects. If you can't resist your phone, there are settings you
              can activate to minimize these effects.
            </p>
          </div>
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
        <div className="p-4 lg:p-5 flex flex-col gap-y-5 bg-cascade-gray-100">
          <h4 className="text-[34px] font-bold text-black2 leading-10 line-clamp-2">
            1 Hour of Screen Time at Bedtime Reduces Sleep by 24 Minutes, Study…
          </h4>
          <p className="line-clamp-4 lg:text-lg font-normal text-black text-base">
            If you can't resist your phone, there are settings you can activate
            to minimize these effects. If you can't resist your phone, there are
            settings you can activate to minimize these effects. If you can't
            resist your phone, there are settings you can activate to minimize
            these effects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
