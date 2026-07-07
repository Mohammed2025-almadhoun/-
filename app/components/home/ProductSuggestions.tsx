"use client";

import { motion } from "framer-motion";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { suggestedProducts } from "@/data/home";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import styles from "@/styles/Products.module.css";

export default function ProductSuggestions() {
  const { addItem } = useCart();
  const { toggleItem, isFavorite } = useWishlist();

  return (
    <section className={styles.suggestions}>
      <div className={styles.header}>
        <h2 className={styles.title}>اقتراحات لك</h2>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollRow}>
          {suggestedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.suggestionCard}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div className={styles.suggestionImage}>
                <button
                  className={styles.suggestionWishlist}
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
                  <Heart size={14} fill={isFavorite(product.id) ? "#e74c3c" : "none"} />
                </button>
              </div>
              <div className={styles.suggestionBody}>
                <div className={styles.suggestionCategory}>
                  {product.category}
                </div>
                <h3 className={styles.suggestionTitle}>{product.title}</h3>
                <div className={styles.suggestionFooter}>
                  <span className={styles.suggestionPrice}>
                    ${product.price}{" "}
                    <span className={styles.suggestionPriceCurrency}>
                      USD
                    </span>
                  </span>
                  <span className={styles.suggestionRating}>
                    <Star size={12} style={{ color: "#f5b342" }} />
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
      </div>
    </section>
  );
}
