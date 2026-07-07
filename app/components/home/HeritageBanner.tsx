"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import styles from "@/styles/Footer.module.css";

export default function HeritageBanner() {
  return (
    <section className={styles.heritageBanner}>
      <div className={styles.heritageBg} />
      <div className={styles.heritagePattern} />

      <motion.div
        className={styles.heritageContent}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.heritageLabel}>
          <Sparkles size={14} />
          تراثنا الأصيل
        </span>
        <h2 className={styles.heritageHeading}>
          <span>تراثنا...</span>
          <span>هويتنا...</span>
          <span>مستقبلنا</span>
        </h2>
        <p className={styles.heritageParagraph}>
          كل قطعة تحمل قصة من قلب فلسطين.
        </p>
        <button className={styles.heritageBtn}>اكتشف المزيد</button>
      </motion.div>


    </section>
  );
}
