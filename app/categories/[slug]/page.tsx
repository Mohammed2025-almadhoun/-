import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CategoryProductsContent from "@/components/categories/CategoryProductsContent";
import { categories, featuredProducts, suggestedProducts } from "@/data/home";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryProductsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return null;

  const allProducts = [...featuredProducts, ...suggestedProducts];
  const filtered = allProducts.filter((p) => p.category === category.title);

  return (
    <>
      <Navbar />
      <main>
        <CategoryProductsContent category={category} products={filtered} />
      </main>
      <Footer />
    </>
  );
}
