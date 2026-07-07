"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import styles from "@/styles/Wishlist.module.css";

export default function WishlistPageContent() {
  const { items, removeItem, totalItems } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>المفضلة</h1>
          <p className={styles.heroSubtitle}>المنتجات التي أضفتها إلى مفضلتك</p>
        </div>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <Heart size={36} />
          </div>
          <h2 className={styles.emptyTitle}>قائمة المفضلة فارغة</h2>
          <p className={styles.emptyDesc}>
            لم تقم بإضافة أي منتجات إلى المفضلة بعد.
            <br />
            تصفح منتجاتنا وأضف ما يعجبك!
          </p>
          <Link href="/products" className={styles.shopBtn}>
            <ShoppingCart size={18} />
            تصفح المنتجات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>المفضلة</h1>
        <p className={styles.heroSubtitle}>
          لديك {totalItems} منتج{totalItems > 1 ? "ات" : ""} في المفضلة
        </p>
      </div>

      <div className={styles.grid}>
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardCategory}>{item.category}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>
                    ${item.price}{" "}
                    <span className={styles.priceCurrency}>USD</span>
                  </span>
                </div>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => {
                    addItem({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                      category: item.category,
                    });
                    removeItem(item.id);
                  }}
                >
                  <ShoppingCart size={14} />
                  أضف إلى السلة
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className={styles.footer}>
        <Link href="/products" className={styles.continueBtn}>
          <ArrowLeft size={16} />
          متابعة التسوق
        </Link>
      </div>
    </div>
  );
}
