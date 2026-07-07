"use client";

import { ArrowLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import styles from "@/styles/Products.module.css";

export default function FeaturedProducts() {
  return (
    <section className={styles.products}>
      <div className={styles.header}>
        <h2 className={styles.title}>منتجات مميزة</h2>
        <a href="/products" className={styles.viewAll}>
          عرض الكل
          <ArrowLeft size={16} />
        </a>
      </div>
      <div className={styles.grid}>
        <ProductCard />
      </div>
    </section>
  );
}
