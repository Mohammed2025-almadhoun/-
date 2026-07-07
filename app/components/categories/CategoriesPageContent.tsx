"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/home";
import styles from "@/styles/Categories.module.css";

export default function CategoriesPageContent() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>الفئات</h1>
        <p className={styles.heroSubtitle}>
          تصفح جميع فئات المنتجات الفلسطينية الأصيلة
        </p>
      </div>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <motion.a
            key={category.id}
            href={`/categories/${category.slug}`}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            layout
          >
            <div className={styles.cardImage} />
            <div className={styles.cardFooter}>
              <span className={styles.cardTitle}>{category.title}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
