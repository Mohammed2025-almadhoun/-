"use client";

import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import styles from "../register-success/RegisterSuccess.module.css";

export default function RegisterSuccess() {
  const handleResendEmail = () => {
    alert("تم إرسال بريد التحقق مرة أخرى.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.checkCircle}>
          <FaCheck />
        </div>

        <h1>تم التسجيل بنجاح</h1>

        <p>تم إنشاء حسابك بنجاح، يمكنك الآن المتابعة إلى الصفحة الرئيسية.</p>

        <div className={styles.buttonsContainer}>
          
          <Link href="/" className={styles.linkWrapper}>
            <button className={styles.btn}>الانتقال للصفحة الرئيسية</button>
          </Link>

          <button className={styles.resendBtn} onClick={handleResendEmail}>
            إعادة إرسال بريد التحقق
          </button>
          
        </div>
      </div>
    </div>
  );
}