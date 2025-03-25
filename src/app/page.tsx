import Banner from "./components/Banner";
import GetEnrolled from "./components/GetEnrolled";
import HomeAboutSection from "./components/Home/HomeAboutSection";
import HomeHero from "./components/Home/HomeHero";
import WhyCascade from "./components/Home/WhyCascade";
import NextStep from "./components/NextStep";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
      <HomeHero />
      <HomeAboutSection />
      <WhyCascade />
      <GetEnrolled/>
      <Banner />
      <NextStep />
    </main>
  );
}
