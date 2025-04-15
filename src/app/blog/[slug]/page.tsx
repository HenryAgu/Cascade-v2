"use client";
import JustInBlogs from "@/app/components/Blog/JustInBlogs";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "next-sanity";
import { fetchBlogBySlug } from "../../../sanity/lib/fetchBlog";
import React from "react";
import { Spinner } from "@/app/components/Spinner";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

const BlogPage = ({ params }: BlogPostProps) => {
  const resolvedParams = React.use(params); // ✅ unwrap the promise
  const { slug } = resolvedParams;

  const components = {
    types: {
image: ({ value }: { value: { asset?: { url?: string }, alt?: string } }) => (
        <Image
          width={650}
          height={350}
          src={value.asset?.url ?? ''}
          alt={value.alt || "Image"}
          className="my-4 rounded-md"
        />
      ),
    },
  };

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => fetchBlogBySlug(slug),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
   <Spinner size={30}/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-red-500">
            Error loading blog post
          </p>
          <p className="text-base text-gray-500">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">
            Blog post not found
          </p>
          <p className="text-base text-gray-500">
            Please check the URL or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen pt-16 lg:pt-28 pb-5 lg:pb-20 px-5 lg:px-14 xl:px-20 font-source bg-white container mx-auto w-full overflow-x-hidden">
        <div className="w-full mx-auto lg:w-[90%] xl:w-[80%] py-10">
          <div className="flex flex-col items-center lg:items-start gap-y-0.5 lg:gap-y-3.5 w-full">
            <h1 className="text-black2 font-bold text-[32px] lg:leading-14 lg:text-5xl text-center lg:text-left capitalize w-full break-words">
              {blog?.title}
            </h1>
            <div className="flex items-center gap-x-3.5">
              <span className="text-sm lg:text-[15px] font-semibold text-black">
                By {blog?.author?.name}
              </span>
              <span className="text-cascade-gray-200 text-xs lg:text-sm font-normal">
                {new Date(blog?.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <Image
            src={blog?.mainImage?.asset?.url}
            alt={blog?.slug?.current}
            width={720}
            height={480}
            className="lg:w-[80%] w-full h-[245px] md:h-[350px] lg:h-[480px] object-cover my-5 lg:my-10"
          />
          <div className="w-full lg:w-[90%] xl:w-[80%] mt-14 lg:mt-32">
            <div className="first-letter:text-[66px] text-lg lg:text-xl font-normal leading-9 lg:leading-10 text-black2 first-letter:font-bold">
              <PortableText value={blog.body} components={components} />
            </div>
          </div>
        </div>
      </main>
      <JustInBlogs />
    </>
  );
};

export default BlogPage;
