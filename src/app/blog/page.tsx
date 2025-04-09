import React from "react";
import BlogHero from "../components/Blog/BlogHero";
import JustInBlogs from "../components/Blog/JustInBlogs";
import TopPick from "../components/Blog/TopPick";

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-16 lg:pt-28 bg-white container mx-auto w-full">
      <BlogHero />
      <JustInBlogs/>
      <TopPick/>
    </main>
  );
};

export default BlogPage;
