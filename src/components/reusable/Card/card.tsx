import React from "react";
import styles from "./card.module.css";
import SmallArrow from "@/assets/svgs/SmallArrow";

interface CardProps {
  title: string;
  broken?: string;
  description: string;
  buttonName: string;
  secondaryButtonName?: string;
  image?: string;
  color?: string;
}
const card = ({
  title,
  broken,
  description,
  buttonName,
  secondaryButtonName,
  image,
  color,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles.cardSolution} `}>
      <div
        className={styles.group}
        //   style="--color: #c189ff; height: 378px;
        style={{ backgroundColor: color }}
      >
        <div className={styles.top}>
          <div className={`${styles.title} ${styles.large}`}>
            {title} <br />
            {broken}
          </div>{" "}
          <div
            className={`${styles.wysiwyg} ${styles.medium} ${styles.wLight}`}
          >
            <p>{description}</p>
          </div>{" "}
        </div>
        <div className={styles.bottom}>
          <a href="/" className={`${styles.button} ${styles.arrow}`}>
            <div className={styles.text}>{buttonName}</div>
            <div className="icon">
              <SmallArrow />
            </div>
          </a>
          {secondaryButtonName!?.length > 0 && (
            <a href="/" className={`${styles.button} ${styles.arrow}`}>
              <div className={styles.text}>{secondaryButtonName}</div>
              <div className={styles.icon}>
                <SmallArrow />
              </div>
            </a>
          )}
        </div>
      </div>
      <div
        className="image "
        // style="aspect-ratio: 1.60858 / 1; translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
      >
        <img width="200" height="124" src={image} data-src={image} alt="" />
      </div>
    </div>
  );
};

export default card;
