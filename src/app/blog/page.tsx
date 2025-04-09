import React from "react";
import BlogHero from "../components/Blog/BlogHero";
import JustInBlogs from "../components/Blog/JustInBlogs";

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-16 lg:pt-28 bg-white container mx-auto w-full">
      <BlogHero />
      <JustInBlogs/>
    </main>
  );
};

export default BlogPage;
