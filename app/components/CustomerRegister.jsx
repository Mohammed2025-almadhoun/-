"use client";

import { useRouter } from "next/navigation"; // للانتقال الى صفحة تسجيل الدخول بنجاح
import { useState } from "react";
import styles from "@/styles/CustomerRegister.module.css";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCalendarAlt,
  FaVenusMars,
} from "react-icons/fa";

export default function CustomerRegister() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setErrors((prev) => ({
        ...prev,
        email:
          value && !emailRegex.test(value)
            ? "صيغة البريد الإلكتروني غير صحيحة"
            : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!navigator.onLine) {
      newErrors.general = "لا يوجد اتصال بالإنترنت";
    }

    // التحقق من البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "صيغة البريد الإلكتروني غير صحيحة";
    }

    // التحقق من قوة كلمة المرور
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وحرف كبير، وحرف صغير، ورقم، ورمز خاص.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمتا المرور غير متطابقتين";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "يجب الموافقة على الشروط";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    router.push("/register-success");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>إنشاء حساب عميل</h1>
          <p>ابدأ بالتسوق وشراء المنتجات بسهولة</p>
        </div>

        <h1 className={styles.PersonalData}>البيانات الشخصية</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="firstName"
                placeholder="الاسم الأول"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="lastName"
                placeholder="اسم العائلة"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />

            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ""}
            />

            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.inputGroup}>
            <FaPhone className={styles.icon} />
            <input
              type="text"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              required
              className={errors.password ? styles.errorInput : ""}
            />

            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="تأكيد كلمة المرور"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={errors.confirmPassword ? styles.errorInput : ""}
            />

            {errors.confirmPassword && (
              <p className={styles.errorText}>{errors.confirmPassword}</p>
            )}
          </div>

          <h1 className={styles.Optional}>معلومات اضافية(اختياري)</h1>

          <div className={styles.inputGroup}>
            <FaCalendarAlt className={styles.icon} />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaVenusMars className={styles.icon} />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">الجنس</option>
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>

          <div className={styles.checkbox}>
            {errors.agreeTerms && (
              <p className={styles.errorText}>{errors.agreeTerms}</p>
            )}

            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />

            <span>أوافق على الشروط والأحكام وسياسة الخصوصية</span>
          </div>

          {/* رسالة الإنترنت */}
          {errors.general && (
            <div className={styles.errorBox}>{errors.general}</div>
          )}

          <button type="submit" className={styles.submitBtn}>
            إنشاء حساب
          </button>

          <div className={styles.divider}>أو</div>

          <button type="button" className={styles.googleBtn}>
            التسجيل باستخدام Google
          </button>

          <p className={styles.loginLink}>
            لديك حساب بالفعل؟
            <a href="/login"> تسجيل الدخول</a>
          </p>
        </form>
      </div>
    </div>
  );
}
