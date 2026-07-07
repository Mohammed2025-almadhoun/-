import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import AboutContent from "./AboutContent";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
