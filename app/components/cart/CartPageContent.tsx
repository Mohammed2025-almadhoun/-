"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "@/styles/Cart.module.css";

export default function CartPageContent() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>سلة التسوق</h1>
          <p className={styles.heroSubtitle}>المنتجات التي أضفتها إلى سلتك</p>
        </div>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <ShoppingCart size={36} />
          </div>
          <h2 className={styles.emptyTitle}>سلتك فارغة</h2>
          <p className={styles.emptyDesc}>
            لم تقم بإضافة أي منتجات إلى السلة بعد.
            <br />
            تصفح منتجاتنا وابدأ التسوق!
          </p>
          <Link href="/products" className={styles.shopBtn}>
            <ShoppingCart size={18} />
            تسوق الآن
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>سلة التسوق</h1>
        <p className={styles.heroSubtitle}>
          لديك {items.length} منتج{items.length > 1 ? "ات" : ""} في سلتك
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.cartItems}>
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={styles.cartItem}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, height: 0, padding: 0, margin: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.itemImage} />

                <div className={styles.itemInfo}>
                  <div className={styles.itemCategory}>{item.category}</div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemPrice}>
                    ${item.price}{" "}
                    <span className={styles.itemPriceCurrency}>USD</span>
                  </div>
                </div>

                <div className={styles.quantityControl}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className={styles.qtyValue}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>ملخص الطلب</h3>

          <div className={styles.summaryRow}>
            <span>المجموع الفرعي</span>
            <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>الشحن</span>
            <span className={styles.summaryValue}>
              {shipping === 0 ? "مجاني" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          {shipping > 0 && (
            <div
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                marginBottom: 14,
              }}
            >
              ‏مجاني للطلبات فوق $100
            </div>
          )}

          <div className={styles.summaryRowTotal}>
            <span>الإجمالي</span>
            <span className={styles.summaryValueTotal}>
              ${total.toFixed(2)}
            </span>
          </div>

          <div className={styles.promoBox}>
            <input
              type="text"
              placeholder="كود الخصم"
              className={styles.promoInput}
            />
            <button className={styles.promoBtn}>تطبيق</button>
          </div>

          <button className={styles.checkoutBtn}>
            <CreditCard size={18} />
            إتمام الشراء
          </button>

          <Link href="/products" className={styles.continueBtn}>
            <ArrowLeft size={16} />
            متابعة التسوق
          </Link>

          <div className={styles.paymentIcons}>
            <ShieldCheck size={16} />
            <span>دفع آمن 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
