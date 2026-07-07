import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsPageContent />
      </main>
      <Footer />
    </>
  );
}
