import React from "react";
import styles from "./aboutUs.module.css";
import Link from "next/link";
const AboutUs = () => {
  return (
    <section
      className={`${styles.component} ${styles.componentCompositionNumbers}`}
    >
      <div className={`${styles.container} ${styles.wide} ${styles.mMedium}`}>
        <div className={`${styles.textBlockCenter} ${styles.white}`}>
          <h1 className={styles.label}>About Us</h1>
          <h3 className={`${styles.title} ${styles.large} ${styles.na}`}>
            We offer trusted connectivity solutions to device makers,
            connectivity providers and IoT players worldwide
          </h3>
          <Link href="/" className={`${styles.button} ${styles.gradient}`}>
            <div className={styles.text}>
              <span>More about us</span>
            </div>
          </Link>
        </div>
        <div className={styles.columns}>
          <div className={`${styles.item} ${styles.item0}`}>
            <div
              className={`${styles.supertitle} ${styles.medium} ${styles.na}`}
            >
              +900
            </div>
            <div className={`${styles.heading} ${styles.medium}`}>
              Million connected devices use Valid&apos;s technology
            </div>
          </div>
          <div className={`${styles.item} ${styles.item1}`}>
            <div
              className={`${styles.supertitle} ${styles.medium} ${styles.na}`}
            >
              +100
            </div>
            <div className={`${styles.heading} ${styles.medium}`}>
              Remote SIM provisioning Platform implemented worldwide
            </div>
          </div>
          <div className={`${styles.item} ${styles.item2}`}>
            <div
              className={`${styles.supertitle} ${styles.medium} ${styles.na}`}
            >
              Top5
            </div>
            <div className={`${styles.heading} ${styles.medium}`}>
              SIM Manufacturer globally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
