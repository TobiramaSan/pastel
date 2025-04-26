import React from "react";
import styles from "./colorCard.module.css";
import Link from "next/link";
const ColorCard = ({
  topText,
  title,
  color,
}: {
  topText: string;
  title: string;
  color: string;
}) => {
  return (
    <div className={`${styles.item} ${styles.item2} ${styles.magnet}`}>
      <div
        className={`${styles.card} ${styles.bgSolid}`}
        style={{ backgroundColor: color }}
      >
        <div className={styles.label}>{topText}</div>
        <div className={styles.group}>
          <h1 className={`${styles.title} ${styles.large}`}>{title}</h1>
          <Link href="/" className={`${styles.button} ${styles.primary}`}>
            <div className={styles.text}>
              <span>Learn More</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
