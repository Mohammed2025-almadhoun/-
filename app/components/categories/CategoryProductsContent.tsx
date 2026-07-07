"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import type { Category, Product } from "@/data/home";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import styles from "@/styles/ProductsPage.module.css";
import catStyles from "@/styles/Categories.module.css";

export default function CategoryProductsContent({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const { addItem } = useCart();
  const { toggleItem, isFavorite } = useWishlist();
  return (
    <div className={styles.page}>
      <div className={catStyles.categoryHero}>
        <Link href="/categories" className={catStyles.backLink}>
          <ArrowRight size={16} />
          جميع الفئات
        </Link>
        <div className={catStyles.heroCard}>
          <div className={catStyles.heroImage} />
          <div className={catStyles.heroFooter}>
            <h1 className={catStyles.heroCardTitle}>{category.title}</h1>
            <p className={catStyles.heroCount}>
              {products.length} منتج
            </p>
          </div>
        </div>
      </div>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.06, duration: 0.35 }}
              layout
            >
              <div className={styles.imageWrapper}>
                <button
                  className={styles.wishlistBtn}
                  aria-label={isFavorite(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={() =>
                    toggleItem({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                  style={{ color: isFavorite(product.id) ? "#e74c3c" : undefined }}
                >
                  <Heart size={16} fill={isFavorite(product.id) ? "#e74c3c" : "none"} />
                </button>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardCategory}>{product.category}</div>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>
                    ${product.price}{" "}
                    <span className={styles.priceCurrency}>USD</span>
                  </span>
                  <span className={styles.rating}>
                    <Star size={14} className={styles.star} />
                    {product.rating}
                  </span>
                </div>
                <button
                  className={styles.addToCartBtn}
                  onClick={() =>
                    addItem({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                >
                  <ShoppingCart size={14} />
                  أضف إلى السلة
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>لا توجد منتجات في هذه الفئة حالياً</p>
          <Link href="/categories" className={catStyles.backLink}>
            <ArrowRight size={14} />
            تصفح الفئات الأخرى
          </Link>
        </div>
      )}
    </div>
  );
}
