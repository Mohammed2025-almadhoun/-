import ProfileAvatar from "./ProfileAvatar";
import styles from "@/styles/ProfileHeader.module.css";

export default function ProfileHeader({ seller, onImageUpload }) {
  return (
    <section className={styles.headerSection}>
      <ProfileAvatar image={seller.image} onUpload={onImageUpload} />
      <h1 className={styles.name}>{seller.name}</h1>
      <p className={styles.role}>{seller.role}</p>
    </section>
  );
}
