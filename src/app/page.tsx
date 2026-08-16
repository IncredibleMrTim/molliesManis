import Bespoke from "@/components/Bespoke";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalleryStrip from "@/components/GalleryStrip";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Collections />
      <HowItWorks />
      <Bespoke />
      <GalleryStrip />
      <Contact />
      <Footer />
    </div>
  );
}
