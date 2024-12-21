import { Hero } from "@/components/Hero";
import { Offers } from "@/components/Offers";
import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Offers />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;