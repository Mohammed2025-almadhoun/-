import { FaEdit } from 'react-icons/fa';
import styles from '../styles/StoreInformation.module.css';

export default function EditStoreButton({ onClick }) {
  return (
    <button
      className={styles.editButton}
      onClick={onClick}
      type="button"
      aria-label="تعديل معلومات المتجر"
    >
      <FaEdit className={styles.editIcon} />
      تعديل معلومات المتجر
    </button>
  );
}
