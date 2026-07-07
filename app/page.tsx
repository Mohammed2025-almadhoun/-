import Navbar from "@/components/home/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductSuggestions from "@/components/home/ProductSuggestions";
import HeritageBanner from "@/components/home/HeritageBanner";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <Features />
        <Categories />
        <ProductSuggestions />
        <FeaturedProducts />
        <HeritageBanner />
      </main>
      <Footer />
    </>
  );
}
