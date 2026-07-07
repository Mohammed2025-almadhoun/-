"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Globe,
  Heart,
  ShoppingCart,
  LogIn,
  Menu,
  X,
  Store,
} from "lucide-react";
import { navLinks } from "@/data/home";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Store size={20} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoArabic}>بأيدي فلسطينية</span>
            <span className={styles.logoEnglish}>By Palestinian Hands</span>
          </div>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.langBtn}>
            <Globe size={14} />
            العربية
          </button>

          <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className={styles.badge}>{wishlistCount}</span>
            )}
          </Link>

          <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>

          <button className={styles.loginBtn}>
            <LogIn size={16} />
            <span>تسجيل الدخول</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileActions}>
              <button className={styles.langBtn}>
                <Globe size={14} />
                العربية
              </button>
              <button className={styles.loginBtn}>
                <LogIn size={16} />
                <span>تسجيل الدخول</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
