import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import AppPreview from "./AppPreview";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "./ui/toaster";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default Home;