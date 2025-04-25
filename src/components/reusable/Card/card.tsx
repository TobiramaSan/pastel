"use client";
import React, { useRef } from "react";
import styles from "./card.module.css";
import SmallArrow from "@/assets/svgs/SmallArrow";
import { motion, useScroll, useTransform } from "motion/react";

interface CardProps {
  title: string;
  broken?: string;
  description: string;
  buttonName: string;
  secondaryButtonName?: string;
  image?: string;
  color?: string;
}
const Card = ({
  title,
  broken,
  description,
  buttonName,
  secondaryButtonName,
  image,
  color,
}: CardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div className={`${styles.card} ${styles.cardSolution} `}>
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
            <div className={styles.icon}>
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
      <motion.div
        ref={ref}
        style={{
          y,
          opacity,
          aspectRatio: "1.60858 / 1",

          //    backgroundColor: "#e0f7fa",
        }}
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true, amount: 0.3 }}
        // style={{
        //   aspectRatio: "1.60858 / 1",
        // }}
        className={styles.image}

        // style="aspect-ratio: 1.60858 / 1; translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
      >
        <img width="200" height="124" src={image} data-src={image} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
