"use client";

import { ArrowLeft } from "lucide-react";
import CategoryCard from "./CategoryCard";
import styles from "@/styles/Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.header}>
        <h2 className={styles.title}>تسوق حسب الفئة</h2>
        <button className={styles.viewAll}>
          عرض الكل
          <ArrowLeft size={16} />
        </button>
      </div>
      <div className={styles.grid}>
        <CategoryCard />
      </div>
    </section>
  );
}
