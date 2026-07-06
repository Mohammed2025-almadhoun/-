import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from '@/styles/EditClientForm.module.css';

const fields = [
  { label: 'البريد الإلكتروني', key: 'email', type: 'email' },
  { label: 'رقم الهاتف', key: 'phone', type: 'tel' },
  { label: 'تاريخ الميلاد', key: 'dateOfBirth', type: 'date' },
  { label: 'الجنس', key: 'gender', type: 'select', options: ['ذكر', 'أنثى'] },
  { label: 'الموقع', key: 'location' },
];

export default function EditClientForm({ client, onSave, onCancel }) {
  const [form, setForm] = useState({ ...client });

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
            <FaUser />
          </div>
          <h2 className={styles.title}>تعديل معلومات العميل</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className={styles.field} key={field.key}>
              <label className={styles.label} htmlFor={field.key}>
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  id={field.key}
                  className={styles.input}
                  value={form[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                >
                  <option value="">اختر</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.key}
                  className={styles.input}
                  type={field.type || 'text'}
                  value={form[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                />
              )}
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
