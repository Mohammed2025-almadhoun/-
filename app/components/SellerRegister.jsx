"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/SellerRegister.module.css";



import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaStore,
  FaMapMarkerAlt,
  FaFileUpload,
} from "react-icons/fa";

import { MdCategory, MdDescription } from "react-icons/md";

export default function SellerRegister() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    storeName: "",
    businessCategory: "",
    businessDescription: "",
    country: "",
    city: "",
    address: "",
    businessLicense: null,
    profileImage: null,
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    // التحقق من البريد الإلكتروني أثناء الكتابة
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

    // البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "صيغة البريد الإلكتروني غير صحيحة";
    }

    // كلمة المرور القوية
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
          <h1>إنشاء حساب بائع</h1>
          <p>ابدأ ببيع منتجاتك اليدوية عبر المنصة</p>
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

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
            className={errors.email ? styles.errorInput : ""}
          />

          {errors.email && <p className={styles.errorText}>{errors.email}</p>}

          <div className={styles.inputGroup}>
            <FaPhoneAlt className={styles.icon} />
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

          <h3 className={styles.sectionTitle}>معلومات المتجر</h3>

          <div className={styles.inputGroup}>
            <FaStore className={styles.icon} />
            <input
              type="text"
              name="storeName"
              placeholder="اسم المتجر"
              value={formData.storeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <MdCategory className={styles.icon} />
            <select
              name="businessCategory"
              value={formData.businessCategory}
              onChange={handleChange}
              required
            >
              <option value="">نوع النشاط التجاري</option>
              <option value="Embroidery">التطريز</option>
              <option value="Handicrafts">الحرف اليدوية</option>
              <option value="Accessories">الإكسسوارات</option>
              <option value="Food">المنتجات الغذائية</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <MdDescription className={styles.iconText} />
            <textarea
              name="businessDescription"
              placeholder="وصف المتجر"
              value={formData.businessDescription}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <div className={styles.inputGroup}>
            <FaMapMarkerAlt className={styles.icon} />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">الدولة</option>
              <option value="Palestine">فلسطين</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkerAlt className={styles.icon} />
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">المدينة</option>
              <option value="Nablus">نابلس</option>
              <option value="Ramallah">رام الله</option>
              <option value="Hebron">الخليل</option>
              <option value="Gaza">غزة</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <FaMapMarkerAlt className={styles.icon} />
            <input
              type="text"
              name="address"
              placeholder="العنوان التفصيلي"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <h3 className={styles.sectionTitle}>المستندات المطلوبة</h3>

          <label className={styles.label}>السجل التجاري أو إثبات النشاط</label>

          <div className={styles.fileGroup}>
            <FaFileUpload className={styles.fileIcon} />
            <input type="file" name="businessLicense" onChange={handleChange} />
          </div>

          <label className={styles.label}>صورة الهوية الشخصية</label>

          <div className={styles.fileGroup}>
            <FaFileUpload className={styles.fileIcon} />
            <input type="file" name="profileImage" onChange={handleChange} />
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
            إنشاء حساب بائع
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
