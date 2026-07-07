import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WishlistPageContent from "@/components/wishlist/WishlistPageContent";

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <main>
        <WishlistPageContent />
      </main>
      <Footer />
    </>
  );
}
