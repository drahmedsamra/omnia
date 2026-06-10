import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Achievements from "@/sections/Achievements";
import FeaturedMoments from "@/sections/FeaturedMoments";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />

      <About />

      <Achievements />

      <FeaturedMoments />
    </main>
  );
}