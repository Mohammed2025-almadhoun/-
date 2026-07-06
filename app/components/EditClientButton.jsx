import { FaEdit } from 'react-icons/fa';
import styles from '@/styles/ClientInformation.module.css';

export default function EditClientButton({ onClick }) {
  return (
    <button
      className={styles.editButton}
      onClick={onClick}
      type="button"
      aria-label="تعديل معلومات العميل"
    >
      <FaEdit className={styles.editIcon} />
      تعديل معلومات العميل
    </button>
  );
}
