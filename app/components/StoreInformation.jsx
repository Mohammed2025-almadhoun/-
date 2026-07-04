import { MdStorefront } from 'react-icons/md';
import styles from '../styles/StoreInformation.module.css';

const fields = [
  { label: 'اسم المتجر', key: 'storeName' },
  { label: 'نوع النشاط', key: 'category' },
  { label: 'وصف النشاط', key: 'businessDescription' },
  { label: 'البريد الإلكتروني', key: 'email' },
  { label: 'رقم الهاتف', key: 'phone' },
  { label: 'الموقع', key: 'location' },
];

export default function StoreInformation({ seller }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconBox}>
          <MdStorefront />
        </div>
        <h2 className={styles.title}>معلومات المتجر</h2>
      </div>
      <div className={styles.body}>
        {fields.map((field) => (
          <div className={styles.row} key={field.key}>
            <span className={styles.label}>{field.label}</span>
            <span className={styles.value}>{seller[field.key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
