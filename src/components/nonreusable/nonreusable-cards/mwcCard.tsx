"use client";
import React from "react";
import styles from "./mwcCard.module.css";
import Link from "next/link";
import CardArrowLeft from "@/assets/svgs/CardArrowLeft";
import CardArrowRight from "@/assets/svgs/CardArrowRight";
const MwcCard = () => {
  return (
    <div className={`${styles.item} ${styles.item0} ${styles.magnet}`}>
      <div className={`${styles.slider} ${styles.sliderInitialized}`}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <Link
              href=""
              className={`${styles.card} ${styles.cardSlider} ${styles.magnet}`}
            >
              <div className={styles.box}>
                <h1 className={`${styles.label} ${styles.large}`}>
                  Latest blog posts
                </h1>
                <div className={styles.group}>
                  <div className={styles.flex}>
                    <h1 className={`${styles.wysiwyg} ${styles.small}`}>
                      24 February 2024
                    </h1>
                    <h2
                      className={`${styles.wysiwyg} ${styles.small} ${styles.time}`}
                    >
                      8 min read
                    </h2>
                  </div>

                  <h3
                    className={`${styles.title} ${styles.small} ${styles.na}`}
                  >
                    Valid's Take on Multiple Enabled Profiles
                  </h3>
                </div>
              </div>
              <div className={`${styles.image} ${styles.rounded}`}>
                <img
                  width="200"
                  height="119"
                  src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1745673638/mobile-people_kdzqoo.jpg"
                />
              </div>
            </Link>
          </div>
          <div className={styles.item} style={{ display: "none" }}>
            <Link
              href=""
              className={`${styles.card} ${styles.cardSlider} ${styles.magnet}`}
            >
              <div className={styles.box}>
                <h1 className={`${styles.label} ${styles.large}`}>
                  Latest blog posts
                </h1>
                <div className={styles.group}>
                  <div className={styles.flex}>
                    <h1 className={`${styles.wysiwyg} ${styles.small}`}>
                      24 February 2024
                    </h1>
                    <h2
                      className={`${styles.wysiwyg} ${styles.small} ${styles.time}`}
                    >
                      8 min read
                    </h2>
                  </div>

                  <h3
                    className={`${styles.title} ${styles.small} ${styles.na}`}
                  >
                    Valid's Take on Multiple Enabled Profiles
                  </h3>
                </div>
              </div>
              <div className={`${styles.image} ${styles.rounded}`}>
                <img
                  width="200"
                  height="119"
                  src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1745674422/wireless-earbuds-with-neon-cyberpunk-style-lighting-9_qnl1cu.jpg"
                />
              </div>
            </Link>
          </div>
          <div className={styles.item} style={{ display: "none" }}>
            <Link
              href=""
              className={`${styles.card} ${styles.cardSlider} ${styles.magnet}`}
            >
              <div className={styles.box}>
                <h1 className={`${styles.label} ${styles.large}`}>
                  Latest blog posts
                </h1>
                <div className={styles.group}>
                  <div className={styles.flex}>
                    <h1 className={`${styles.wysiwyg} ${styles.small}`}>
                      24 February 2024
                    </h1>
                    <h2
                      className={`${styles.wysiwyg} ${styles.small} ${styles.time}`}
                    >
                      8 min read
                    </h2>
                  </div>

                  <h3
                    className={`${styles.title} ${styles.small} ${styles.na}`}
                  >
                    Valid's Take on Multiple Enabled Profiles
                  </h3>
                </div>
              </div>
              <div className={`${styles.image} ${styles.rounded}`}>
                <img
                  width="200"
                  height="119"
                  src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1745674419/template-mobile-communication-company-identity-with-mini-micro-nano-phone-sim-card_kiqxn7.jpg"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.arrows}>
          <div className={`${styles.arrow} ${styles.arrowLeft}`}>
            <CardArrowLeft />
          </div>
          <div className={`${styles.arrow} ${styles.arrowRight}`}>
            <CardArrowRight />
          </div>
        </div>
        <div className={styles.counter}>
          <span className={styles.current}>1</span>/
          <span className={styles.total}>3</span>
        </div>
      </div>
    </div>
  );
};

export default MwcCard;
