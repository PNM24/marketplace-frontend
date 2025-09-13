import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Marketplace - Toate drepturile rezervate
      </p>
      <p className={styles.credit}>Created by <b>PNM</b></p>
    </footer>
  );
}

export default Footer;