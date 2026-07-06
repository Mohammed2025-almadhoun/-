import { FaUser } from 'react-icons/fa';
import styles from '@/styles/ClientInformation.module.css';

const fields = [
  { label: 'البريد الإلكتروني', key: 'email' },
  { label: 'رقم الهاتف', key: 'phone' },
  { label: 'تاريخ الميلاد', key: 'dateOfBirth' },
  { label: 'الجنس', key: 'gender' },
  { label: 'الموقع', key: 'location' },
];

export default function ClientInformation({ client }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconBox}>
          <FaUser />
        </div>
        <h2 className={styles.title}>معلومات العميل</h2>
      </div>
      <div className={styles.body}>
        {fields.map((field) => (
          <div className={styles.row} key={field.key}>
            <span className={styles.label}>{field.label}</span>
            <span className={styles.value}>{client[field.key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
