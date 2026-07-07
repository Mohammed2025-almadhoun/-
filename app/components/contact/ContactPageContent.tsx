"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { footerLinks } from "@/data/home";
import styles from "@/styles/Contact.module.css";

const contactInfo = [
  { icon: Mail, label: "البريد الإلكتروني", value: footerLinks.contact.email, href: `mailto:${footerLinks.contact.email}` },
  { icon: Phone, label: "الهاتف", value: footerLinks.contact.phone, href: `tel:${footerLinks.contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "العنوان", value: "فلسطين - القدس" },
  { icon: Clock, label: "ساعات العمل", value: "السبت - الخميس: ٩:٠٠ ص - ٦:٠٠ م" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPattern} />
        <motion.div className={styles.heroContent} {...fadeUp}>
          <span className={styles.heroLabel}>تواصل معنا</span>
          <h1 className={styles.heroTitle}>نحن هنا لمساعدتك</h1>
          <p className={styles.heroDesc}>
            تواصل معنا لأي استفسار أو اقتراح، فريقنا سعيد بخدمتك على مدار الساعة.
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <motion.div {...fadeUp}>
                <span className={styles.sectionLabel}>معلومات الاتصال</span>
                <h2 className={styles.sectionTitle}>طرق التواصل</h2>
                <p className={styles.sectionDesc}>
                  يمكنك التواصل معنا عبر أي من الوسائل التالية، وسنكون سعداء
                  بالرد على استفساراتك في أقرب وقت.
                </p>
              </motion.div>
              <div className={styles.infoCards}>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className={styles.infoCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                  >
                    <div className={styles.infoIcon}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.infoValue}>
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.formCol}>
              <motion.div
                className={styles.formCard}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {submitted ? (
                  <div className={styles.successMsg}>
                    <CheckCircle size={48} />
                    <h3>تم إرسال رسالتك بنجاح!</h3>
                    <p>سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                  </div>
                ) : (
                  <>
                    <div className={styles.formHeader}>
                      <MessageSquare size={22} />
                      <h3>أرسل لنا رسالة</h3>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                      <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                          <label htmlFor="name">الاسم الكامل</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="أدخل اسمك"
                            required
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label htmlFor="email">البريد الإلكتروني</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="أدخل بريدك"
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                          <label htmlFor="phone">رقم الهاتف</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="أدخل رقم هاتفك"
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label htmlFor="subject">الموضوع</label>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="عنوان الرسالة"
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="message">الرسالة</label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="اكتب رسالتك هنا..."
                          rows={5}
                          required
                        />
                      </div>
                      <button type="submit" className={styles.submitBtn}>
                        <Send size={16} />
                        إرسال الرسالة
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
