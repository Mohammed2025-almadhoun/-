"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Eye,
  Target,
  Shield,
  Users,
  Leaf,
  Palette,
  Award,
} from "lucide-react";
import Link from "next/link";
import styles from "@/styles/About.module.css";

const values = [
  { icon: Palette, title: "الأصالة والتراث", desc: "نحافظ على الهوية الفلسطينية الأصيلة من خلال منتجات تراثية حقيقية." },
  { icon: Users, title: "دعم الحرفيين", desc: "نوفر منصة مستدامة لدعم الحرفيين الفلسطينيين وتمكينهم اقتصادياً." },
  { icon: Shield, title: "الجودة والثقة", desc: "نضمن جودة كل منتج ونبني علاقة ثقة مع عملائنا." },
  { icon: Leaf, title: "الاستدامة", desc: "نعتمد مواد طبيعية صديقة للبيئة ونساهم في الحفاظ على الحرف اليدوية." },
];

const stats = [
  { value: "٢٠٠+", label: "حرفي وحرفية" },
  { value: "١٠٠٠+", label: "منتج يدوي" },
  { value: "١٥+", label: "مدينة فلسطينية" },
  { value: "٩٨٪", label: "رضا العملاء" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutContent() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <motion.div className={styles.heroContent} {...fadeUp}>
          <span className={styles.heroLabel}>من نحن</span>
          <h1 className={styles.heroTitle}>بأيدي فلسطينية</h1>
          <p className={styles.heroDesc}>
            منصة فلسطينية للحرف اليدوية الأصيلة، نربط الحرفيين الفلسطينيين
            بالعالم ونساهم في الحفاظ على التراث والهوية.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.storyGrid} {...fadeUp}>
            <div className={styles.storyText}>
              <span className={styles.sectionLabel}>قصتنا</span>
              <h2 className={styles.sectionTitle}>من قلب فلسطين إلى العالم</h2>
              <p>
                انطلقت &quot;بأيدي فلسطينية&quot; من رؤية واضحة: خلق منصة رقمية
                تعرض الحرف اليدوية الفلسطينية الأصيلة وتصل بها إلى كل مكان في
                العالم. نؤمن بأن كل قطعة تحمل قصة، وكل غرزة تطريز تروي حكاية
                تراث عريق.
              </p>
              <p>
                نعمل مباشرة مع الحرفيين الفلسطينيين في جميع المحافظات، من القدس
                إلى غزة، ومن الخليل إلى نابلس، لضمان حصولهم على فرصة عادلة
                لعرض وبيع منتجاتهم.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <HeartHandshake size={48} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mvSection}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <motion.div className={styles.mvCard} {...fadeUp} transition={{ duration: 0.5, delay: 0 }}>
              <div className={styles.mvIcon}>
                <Target size={24} />
              </div>
              <h3>رسالتنا</h3>
              <p>
                تمكين الحرفيين الفلسطينيين والحفاظ على التراث الفلسطيني من خلال
                منصة رقمية مستدامة تصل بمنتجاتهم إلى العالم.
              </p>
            </motion.div>
            <motion.div className={styles.mvCard} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className={styles.mvIcon}>
                <Eye size={24} />
              </div>
              <h3>رؤيتنا</h3>
              <p>
                أن نكون المنصة الرائدة للحرف اليدوية الفلسطينية، ونبني جسراً
                بين التراث الفلسطيني والعالم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.centerHeader} {...fadeUp}>
            <span className={styles.sectionLabel}>قيمنا</span>
            <h2 className={styles.sectionTitle}>ما نؤمن به</h2>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                <div className={styles.valueIcon}>
                  <v.icon size={22} />
                </div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsPattern} />
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div className={styles.ctaContent} {...fadeUp}>
            <h2 className={styles.ctaTitle}>انضم إلينا في دعم التراث الفلسطيني</h2>
            <p className={styles.ctaDesc}>
              كل عملية شراء تدعم حرفياً فلسطينياً وتساهم في الحفاظ على تراثنا
              وهويتنا.
            </p>
            <Link href="/products" className={styles.ctaBtn}>
              تسوق الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
