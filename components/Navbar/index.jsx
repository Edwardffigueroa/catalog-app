import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
