import { useState } from 'react';
import { MdStorefront } from 'react-icons/md';
import styles from '../styles/EditStoreForm.module.css';

const fields = [
  { label: 'اسم المتجر', key: 'storeName' },
  { label: 'نوع النشاط', key: 'category' },
  { label: 'وصف النشاط', key: 'businessDescription'},
  { label: 'البريد الإلكتروني', key: 'email', type: 'email' },
  { label: 'رقم الهاتف', key: 'phone', type: 'tel' },
  { label: 'الموقع', key: 'location' },
];

export default function EditStoreForm({ seller, onSave, onCancel }) {
  const [form, setForm] = useState({ ...seller });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.iconBox}>
            <MdStorefront />
          </div>
          <h2 className={styles.title}>تعديل معلومات المتجر</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className={styles.field} key={field.key}>
              <label className={styles.label} htmlFor={field.key}>
                {field.label}
              </label>
              <input
                id={field.key}
                className={styles.input}
                type={field.type || 'text'}
                value={form[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            </div>
          ))}

          <div className={styles.actions}>
            <button type="submit" className={styles.saveButton}>
              حفظ التغييرات
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
