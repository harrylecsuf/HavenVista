import Image from "next/image";
import home_styles from "./styles/home.module.css";

export default function HomePage() {
  return (
    <section className={home_styles.hero}>
      <div className={home_styles.overlay}></div> {/* Overlay for contrast */}
      <div className={home_styles.content}>
        <h1>HavenVista</h1>
        <p>Accurate AI-driven housing market predictions.</p>
        <a href="/map" className={home_styles.button}>Explore Now</a>
      </div>
    </section>
  );
}