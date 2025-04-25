import React from "react";
import styles from "./header.module.css";
import Logo from "@/assets/svgs/Logo";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.columns} ${styles.nogutters}`}>
        <div className={styles.item}>
          <a href="" className={styles.link}>
            <Logo />
          </a>
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
              <a href="/">Solutions</a>
            </li>
            <li
              id="menu-item-263"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem263}`}
            >
              <a href="/">Insights</a>
            </li>
            <li
              id="menu-item-1118"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem1118}`}
            >
              <a href="/">About</a>
            </li>
            <li
              id="menu-item-1119"
              className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem1119}`}
            >
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <a
            href="#modal-contact"
            className={`${styles.button} ${styles.tertiary}`}
          >
            Talk to our experts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
