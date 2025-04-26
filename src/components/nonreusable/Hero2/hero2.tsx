import React from "react";
import styles from "./hero2.module.css";
import Link from "next/link";
const Hero2 = () => {
  return (
    <section
      className={`${styles.component} ${styles.componentCompositionQuadCards}`}
    >
      <div className={`${styles.container} ${styles.wide}`}>
        <div className={`${styles.textBlockCenter} ${styles.white}`}>
          <h1 className={styles.label}>Latest Insights</h1>
          <p className={`${styles.title} ${styles.large}`}>
            Stay informed on the latest trends and discover how the world around
            you is evolving.
          </p>
          <Link className={`${styles.button} ${styles.gradient}`} href="/">
            <div className={styles.text}>
              <span className="">All Insights</span>
            </div>
          </Link>
        </div>
        {/* Columns */}
        <div className={`${styles.columns} ${styles.noGutter}`}></div>
      </div>
    </section>
  );
};

export default Hero2;
