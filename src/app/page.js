import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import LoveLetter from "@/components/LoveLetter";
import Memories from "@/components/Memories";
import Reasons from "@/components/Reasons";
import Future from "@/components/Future";
import Footer from "@/components/Footer";
import Story from "@/components/OurStory";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counter />
      <LoveLetter />
      <Memories />
      <Gallery />
      <Story />
      <Reasons />
      <Future />
      <Footer />
    </>
  );
}