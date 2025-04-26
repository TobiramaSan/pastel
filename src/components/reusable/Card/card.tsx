"use client";
import React from "react";
import styles from "./card.module.css";
import SmallArrow from "@/assets/svgs/SmallArrow";
import {
  motion,
  //  useScroll,
  //  useTransform
} from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  broken?: string;
  description: string;
  buttonName: string;
  secondaryButtonName: string;
  image: string;
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
  //   const ref = useRef(null);

  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start end", "end start"],
  //   });

  //   const y = useTransform(scrollYProgress, [0, 1], ["10vw", "0vw"]);
  //   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div className={`${styles.card} ${styles.cardSolution}`}>
      <motion.div className={styles.group} style={{ backgroundColor: color }}>
        <div className={styles.top}>
          <div className={`${styles.title} ${styles.large}`}>
            {title} <br />
            {broken}
          </div>
          <div
            className={`${styles.wysiwyg} ${styles.medium} ${styles.wLight}`}
          >
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <Link href="/" className={`${styles.button} ${styles.arrow}`}>
            <div className={styles.text}>{buttonName}</div>
            <div className={styles.icon}>
              <SmallArrow />
            </div>
          </Link>
          {secondaryButtonName?.length > 0 && (
            <Link href="/" className={`${styles.button} ${styles.arrow}`}>
              <div className={styles.text}>{secondaryButtonName}</div>
              <div className={styles.icon}>
                <SmallArrow />
              </div>
            </Link>
          )}
        </div>
      </motion.div>

      {/* Image with scroll animation */}
      <motion.div
        // ref={ref}
        // style={{
        //   y,
        //   opacity,
        //   aspectRatio: "1.60858 / 1",
        // }}
        className={styles.image}
      >
        <Image width="200" height="124" src={image} data-src={image} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
