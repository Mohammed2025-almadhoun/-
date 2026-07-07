"use client";

import { motion } from "framer-motion";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { featuredProducts } from "@/data/home";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import styles from "@/styles/Products.module.css";

export default function ProductCard() {
  const { addItem } = useCart();
  const { toggleItem, isFavorite } = useWishlist();

  return (
    <>
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
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
              <ShoppingCart size={14} style={{ marginLeft: 6 }} />
              أضف إلى السلة
            </button>
          </div>
        </motion.div>
      ))}
    </>
  );
}
