"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, ShoppingCart, Heart, X } from "lucide-react";
import { featuredProducts, suggestedProducts, categories } from "@/data/home";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import styles from "@/styles/ProductsPage.module.css";

const allProducts = [...featuredProducts, ...suggestedProducts];

export default function ProductsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const { addItem } = useCart();
  const { toggleItem, isFavorite } = useWishlist();

  const filtered = useMemo(() => {
    let result = allProducts;
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory(null);
  };

  const hasActiveFilters = searchQuery.trim() || activeCategory;

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>المنتجات</h1>
        <p className={styles.heroSubtitle}>
          تصفح مجموعتنا المتنوعة من المنتجات الفلسطينية الأصيلة
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery("")}>
              <X size={16} />
            </button>
          )}
        </div>
        <button
          className={`${styles.filterToggle} ${showFilters ? styles.filterToggleActive : ""}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={16} />
          الفئات
        </button>
      </div>

      {/* Category Pills */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className={styles.categoriesRow}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryPill} ${activeCategory === cat.title ? styles.categoryPillActive : ""}`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.title ? null : cat.title
                  )
                }
              >
                {cat.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Info */}
      <div className={styles.resultsInfo}>
        <span>{filtered.length} منتج</span>
        {hasActiveFilters && (
          <button className={styles.clearFiltersBtn} onClick={clearFilters}>
            <X size={14} />
            إعادة تعيين
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((product, index) => (
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
          <p>لا توجد منتجات تطابق بحثك</p>
          <button className={styles.resetBtn} onClick={clearFilters}>
            عرض جميع المنتجات
          </button>
        </div>
      )}
    </div>
  );
}
