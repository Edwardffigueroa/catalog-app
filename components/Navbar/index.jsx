"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { NAV_OPTS } from "@/utils/constants";
import { useLayout } from "@/providers/LayoutProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { toggleLayout, setToggleLayout } = useLayout();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {NAV_OPTS.map(({ id, href, label }) => {
            const isActive = pathname === href;
            return (
              <li
                key={id}
                className={`${styles.li} ${
                  isActive ? styles.link_selected : ""
                }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.btns_container}>
        <button
          onClick={() => setToggleLayout((prev) => !prev)}
          className={`${styles.btn} ${
            !toggleLayout ? styles.btn_selected : ""
          }`}
        >
          <Image
            width={29}
            className={styles.img}
            height={29}
            src="/icons/rows.svg"
            alt="rows-icon"
          />
        </button>
        <button
          onClick={() => setToggleLayout((prev) => !prev)}
          className={`${styles.btn} ${toggleLayout ? styles.btn_selected : ""}`}
        >
          <Image
            width={29}
            height={29}
            className={styles.img}
            src="/icons/columns.svg"
            alt="columns-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
