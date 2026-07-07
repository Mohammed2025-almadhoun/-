"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/home";
import styles from "@/styles/Categories.module.css";

export default function CategoryCard() {
  return (
    <>
      {categories.map((category, index) => (
        <motion.a
          key={category.id}
          href={`/categories/${category.slug}`}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
        >
          <div className={styles.cardImage} />
          <div className={styles.cardFooter}>
            <span className={styles.cardTitle}>{category.title}</span>
          </div>
        </motion.a>
      ))}
    </>
  );
}
