import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CartPageContent from "@/components/cart/CartPageContent";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main>
        <CartPageContent />
      </main>
      <Footer />
    </>
  );
}
