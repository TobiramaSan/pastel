import React from "react";
import styles from "./blogCard.module.css";
import Link from "next/link";
const BlogCard = () => {
  return (
    <div className={`${styles.item} ${styles.item1} ${styles.magnet}`}>
      <div className={`${styles.card} ${styles.eventPhoto}`}>
        <div className={`${styles.image} ${styles.cover} `}>
          <img
            width="200"
            height="222"
            src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1745682726/bg-events-7_ep0ceh.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.overlay} ${styles._30}`}></div>
        <h1 className={`${styles.label} ${styles.large}`}>Next Event</h1>
        <h1 className={`${styles.heading} ${styles.large}`}>
          MWC Barcelona 2025
        </h1>
        <div className={styles.group}>
          <div className={`${styles.wysiwyg} ${styles.large}`}>
            <p className="">
              MWC 2025 promises to be an unmissable event—where innovation, big
              ideas, and global change converge. It&apos;s the only platform
              where you&apos;ll hear from industry leaders, emerging voices, and
              visionary tech pioneers shaping the future of connectivity
            </p>
          </div>
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

export default BlogCard;
