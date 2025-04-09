import React from "react";
import BlogHero from "../components/Blog/BlogHero";
import JustInBlogs from "../components/Blog/JustInBlogs";
import TopPick from "../components/Blog/TopPick";
import DailyColumn from "../components/Blog/DailyColumn";

const BlogPage = () => {
  return (
    <main className="min-h-screen pt-16 lg:pt-28 bg-white container mx-auto w-full">
      <BlogHero />
      <JustInBlogs/>
      <TopPick/>
      <DailyColumn/>
    </main>
  );
};

export default BlogPage;
