import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
