import HomeAboutSection from "./components/Home/HomeAboutSection";
import HomeHero from "./components/Home/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
      <HomeHero />
      <HomeAboutSection/>
    </main>
  );
}
