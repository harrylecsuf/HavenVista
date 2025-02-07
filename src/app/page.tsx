import Image from "next/image";
import styles from "./styles/home.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div> {/* Overlay for contrast */}
      <div className={styles.content}>
        <h1>HavenVista</h1>
        <p>Accurate AI-driven housing market predictions.</p>
        <a href="/map" className={styles.button}>Explore Now</a>
      </div>
    </section>
  );
}