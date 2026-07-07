import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CategoriesPageContent from "@/components/categories/CategoriesPageContent";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CategoriesPageContent />
      </main>
      <Footer />
    </>
  );
}
