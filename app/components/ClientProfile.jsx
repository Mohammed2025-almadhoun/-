'use client';

import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ClientInformation from './ClientInformation';
import EditClientButton from './EditClientButton';
import EditClientForm from './EditClientForm';
import styles from '@/styles/ClientProfile.module.css';

const defaultClient = {
  name: 'سارة أحمد',
  role: 'عميل',
  email: 'sara.client@example.com',
  phone: '0561234567',
  dateOfBirth: '1995-03-15',
  gender: 'أنثى',
  location: 'فلسطين - نابلس',
  image: '/images/person.jfif',
};

export default function ClientProfile({ client: customClient, onImageUpload }) {
  const client = { ...defaultClient, ...customClient };
  const [clientData, setClientData] = useState(client);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSave = (updated) => {
    setClientData(updated);
    setShowEditForm(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <ProfileHeader seller={clientData} onImageUpload={onImageUpload} />

        <div className={styles.infoSection}>
          <ClientInformation client={clientData} />
        </div>

        <EditClientButton onClick={() => setShowEditForm(true)} />
      </main>

      {showEditForm && (
        <EditClientForm
          client={clientData}
          onSave={handleSave}
          onCancel={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
}
