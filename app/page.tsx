import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Achievements from "@/sections/Achievements";
import FeaturedMoments from "@/sections/FeaturedMoments";
import Footer from "@/sections/Footer";
import Timeline from "@/sections/Timeline";
import Coach from "@/sections/Coach";
import Sponsors from "@/sections/Sponsors";
import Contributors from "@/sections/Contributors";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />

      <About />

      <Timeline />

      <Sponsors />


      <Achievements />

      <Coach />

      <FeaturedMoments />

      <Contributors />

      <Footer />


    </main>
  );
}