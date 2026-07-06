"use client";

import Link from "next/link";
import { FaUser, FaStore } from "react-icons/fa";
import styles from "@/styles/ChooseAccount.module.css";

export default function ChooseAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>اختر نوع الحساب للمتابعة</h1>
        <p>اختر نوع الحساب الذي تريد تسجيل الدخول إليه</p>

        <div className={styles.cards}>
          <div className={styles.accountCard}>
            <FaUser className={styles.customerIcon} />

            <h2>دخول كعميل</h2>

            <p>
              تصفح المنتجات
              <br />
              وشراء ما يعجبك
            </p>

            <Link href="/register/customer">
              <button className={styles.customerBtn}>دخول كعميل</button>
            </Link>
          </div>

          <div className={styles.accountCard}>
            <FaStore className={styles.sellerIcon} />

            <h2>دخول كبائع</h2>

            <p>
              إدارة متجرك
              <br />
              وعرض منتجاتك
            </p>

            <Link href="/register/seller">
              <button className={styles.sellerBtn}>دخول كبائع</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
