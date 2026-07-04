import { FaCamera } from "react-icons/fa";
import styles from "../styles/Avatar.module.css";

export default function ProfileAvatar({ image, onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onUpload) {
      // تحويل الملف إلى رابط مؤقت وعرْضه فوراً
      const temporaryUrl = URL.createObjectURL(file);
      onUpload(temporaryUrl);
    }
  };

  return (
    <div className={styles.avatarWrapper}>
      <img src={image} alt="صورة البائع" className={styles.avatar} />
      {/* تحويل الزر إلى label ليقوم بتشغيل الـ input المخفي عند الضغط عليه */}
      <label className={styles.cameraButton} htmlFor="avatar-input">
        <FaCamera />
      </label>
      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}