import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/bannder.webp"
        alt="Colorful event lights above a lively venue crowd"
        fill
        priority
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.description}>
          Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>
    </section>
  );
}
