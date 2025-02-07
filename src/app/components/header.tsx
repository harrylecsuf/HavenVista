"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      // Change background dynamically based on scroll position
      if (window.scrollY > 50) {
        setBgColor("rgba(0, 0, 0, 0.8)"); // Darken header on scroll
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header} style={{ backgroundColor: bgColor }}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">HavenVista</Link>
        </div>
        <div className={styles.links}>
          <Link href="/map">Map</Link>
          <Link href="/graphs">Graphs</Link>
          <Link href="/news">News</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className={styles.auth}>
          <Link href="/login" className={styles.link}>Login</Link>
          <Link href="/register" className={styles.link}>Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;