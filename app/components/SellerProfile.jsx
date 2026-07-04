'use client';

import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import StoreInformation from './StoreInformation';
import EditStoreButton from './EditStoreButton';
import EditStoreForm from './EditStoreForm';
import styles from '../styles/SellerProfile.module.css';

const defaultSeller = {
  name: 'أحمد محمود',
  role: 'بائع',
  storeName: 'منسوجات يدوية',
  businessDescription: "متجر متخصص في بيع المنسوجات اليدوية التقليدية المصنوعة يدويا من قبل الحرفيين الفلسطينيين",
  category: 'الحرف اليدوية',
  email: 'ahmad.store@example.com',
  phone: '0597654321',
  location: 'فلسطين - رام الله',
  image: '/images/person.jfif',
};

export default function SellerProfile({ seller: customSeller }) {
  const seller = { ...defaultSeller, ...customSeller };
  const [sellerData, setSellerData] = useState(seller);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSave = (updated) => {
    setSellerData(updated);
    setShowEditForm(false);
  };

  // 1. إضافة دالة لتحديث رابط الصورة داخل الـ State المحلية
  const handleImageUpload = (newImageUrl) => {
    setSellerData((prevData) => ({
      ...prevData,
      image: newImageUrl,
    }));
  };
  
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        {/* 2. تمرير الدالة الجديدة هنا ليتم تحديث الـ State مباشرة */}
        <ProfileHeader seller={sellerData} onImageUpload={handleImageUpload} />

        <div className={styles.storeSection}>
          <StoreInformation seller={sellerData} />
        </div>

        <EditStoreButton onClick={() => setShowEditForm(true)} />
      </main>

      {showEditForm && (
        <EditStoreForm
          seller={sellerData}
          onSave={handleSave}
          onCancel={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
}