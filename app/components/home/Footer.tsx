"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { footerLinks, navLinks } from "@/data/home";
import styles from "@/styles/Footer.module.css";

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram size={18} />,
  Facebook: <FaFacebookF size={18} />,
  WhatsApp: <FaWhatsapp size={18} />,
  Twitter: <FaTwitter size={18} />,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <span className={styles.logoArabic}>بأيدي فلسطينية</span>
          <span className={styles.logoEnglish}>By Palestinian Hands</span>
          <p className={styles.footerDescription}>
            منصة فلسطينية للحرف اليدوية الأصيلة. نربط الحرفيين الفلسطينيين
            بالعالم، ونساهم في الحفاظ على التراث والهوية الفلسطينية.
          </p>
        </div>

        <div>
          <h4 className={styles.footerTitle}>روابط سريعة</h4>
          <div className={styles.footerLinks}>
            {footerLinks.quickLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className={styles.footerTitle}>التنقل</h4>
          <div className={styles.footerLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className={styles.footerTitle}>تواصل معنا</h4>
          <div className={styles.contactItem}>
            <Mail size={14} />
            <span>{footerLinks.contact.email}</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={14} />
            <span>{footerLinks.contact.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={14} />
            <span>فلسطين - القدس</span>
          </div>
          <div className={styles.socialLinks}>
            {footerLinks.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.name}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © 2026 By Palestinian Hands. جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
