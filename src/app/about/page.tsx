import React from "react";
import NextStep from "../components/NextStep";
import Banner from "../components/Banner";

const AboutUsPage = () => {
  return (
    <main className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
        <Banner/>
      <NextStep />
    </main>
  );
};

export default AboutUsPage;
