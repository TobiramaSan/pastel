import React from "react";
import styles from "./header.module.css";
import Logo from "@/assets/svgs/Logo";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.columns} ${styles.nogutters}`}>
        <div className={styles.item}>
          <Link href="" className={styles.link}>
            <Logo />
          </Link>
        </div>
        <div className={styles.item}>
          {/* <div className={styles.submenus}>

          </div> */}
          <ul
            className={` ${styles.menu} ${styles.menuMain} $`}
            id={styles.menuMain}
          >
            <li
              id="menu-item-262"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem262}`}
            >
              <Link href="/">Solutions</Link>
            </li>
            <li
              id="menu-item-263"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem263}`}
            >
              <Link href="/">Insights</Link>
            </li>
            <li
              id="menu-item-1118"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem1118}`}
            >
              <Link href="/">About</Link>
            </li>
            <li
              id="menu-item-1119"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem1119}`}
            >
              <Link href="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <Link
            href="#modal-contact"
            className={`${styles.button} ${styles.tertiary}`}
          >
            Talk to our experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
