"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Truck, ShieldCheck } from "lucide-react";
import { features } from "@/data/home";
import styles from "@/styles/Features.module.css";

const iconMap: Record<string, React.ReactNode> = {
  BadgeCheck: <BadgeCheck size={26} />,
  Handshake: <Handshake size={26} />,
  Truck: <Truck size={26} />,
  ShieldCheck: <ShieldCheck size={26} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section className={styles.features}>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {features.map((feature) => (
          <motion.div key={feature.id} className={styles.card} variants={cardVariants}>
            <div className={styles.iconWrapper}>{iconMap[feature.icon]}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
