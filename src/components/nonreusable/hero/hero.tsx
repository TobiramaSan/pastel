import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <section
      className={`${styles.component} ${styles.componentHeroSupertitle}`}
      // data-component="hero-supertitle"
    >
      <div
        className={`${styles.video} ${styles.cover}`}
        style={{
          transform: "translate(0px, 0px)",
          opacity: 1,
        }}
      >
        <video
          preload="metadata"
          autoPlay
          loop
          playsInline
          muted
          poster="https://trustedconnectivity.valid.com/wp-content/uploads/2025/01/bg-valid-video.jpg"
          className={`${styles.playing}`}
        >
          <source
            src="https://trustedconnectivity.valid.com/wp-content/uploads/2024/11/Hero-valid.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`${styles.gradient}`}
        style={{
          transform: "translate(-50%, 0%)",
        }}
      ></div>

      <div className={`${styles.container} ${styles.mLarge}`}>
        <div className={`${styles.columns}`}>
          <div className={`${styles.item}`}>
            <div
              className={`${styles.supertitle} ${styles.small} ${styles.bold} ${styles.na}`}
              data-desktop=""
            >
              <div
                className={`${styles.word}`}
                style={{
                  transformOrigin: "501.344px 37.1719px",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                <em
                  style={{
                    backgroundPositionX: "0%",
                    opacity: 1,
                  }}
                >
                  Empowering
                </em>
              </div>

              <div
                className={`${styles.word}`}
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                  transformOrigin: "501.344px 41.7773px",
                }}
              >
                <div
                  className={`${styles.bottomContainer}`}
                  style={{
                    transform: "translate(0px, 0px)",
                    opacity: 1,
                  }}
                >
                  <a
                    href="/"
                    className={`${styles.button} ${styles.primary} ${styles.na}`}
                  >
                    <div className={`${styles.text}`}>
                      <span>Talk to our experts</span>
                    </div>
                  </a>
                </div>
                seamless
              </div>

              <div
                className={`${styles.word}`}
                style={{
                  transformOrigin: "501.344px 37.1719px",
                  transform: "translate(0px, 0px)",
                  opacity: 1,
                }}
              >
                connectivity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
