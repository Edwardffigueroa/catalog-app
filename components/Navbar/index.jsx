/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.link_selected}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Favorites</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.btns_container}>
        <button onClick={() => {}} className={styles.btn}>
          <img className={styles.img} src="/icons/rows.svg" alt="" />
        </button>
        <button
          onClick={() => {}}
          className={`${styles.btn} ${styles.btn_selected}`}
        >
          <img className={styles.img} src="/icons/columns.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
