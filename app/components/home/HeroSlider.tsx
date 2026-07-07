"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { heroSlides } from "@/data/home";
import styles from "@/styles/Hero.module.css";

function getGradient(index: number): string {
  const gradients = [
    "linear-gradient(135deg, #0B5D47 0%, #1a7a5a 50%, #0B5D47 100%)",
    "linear-gradient(135deg, #2E7D5A 0%, #0B5D47 50%, #1a5a47 100%)",
    "linear-gradient(135deg, #1a5a47 0%, #0B5D47 50%, #2E7D5A 100%)",
  ];
  return gradients[index % gradients.length];
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = heroSlides;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      <div className={styles.sliderWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={styles.slideBg}
              style={{ background: getGradient(current) }}
            />
            <div className={styles.embroideryPattern} />

            <div className={styles.slideContent}>
              <div className={styles.slideLeft}>
                <motion.span
                  className={styles.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {slide.label}
                </motion.span>

                <motion.h1
                  className={styles.heading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  className={styles.paragraph}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slide.paragraph}
                </motion.p>

                <motion.div
                  className={styles.buttons}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button className={styles.primaryBtn}>تسوق الآن</button>
                  <button className={styles.outlineBtn}>
                    اكتشف قصتنا
                  </button>
                </motion.div>
              </div>


            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className={`${styles.navCustom} ${styles.navPrev}`}
          onClick={prev}
          aria-label="Previous slide"
        >
          <ChevronRight size={22} />
        </button>
        <button
          className={`${styles.navCustom} ${styles.navNext}`}
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === current ? styles.dotActive : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
