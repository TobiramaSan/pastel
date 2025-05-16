import React from "react";
import styles from "./textcomponent.module.css";
const TextComponent = () => {
  return (
    <section className={styles.component}>
      <div className={styles.sticky}>
        <div className={styles.eye}>
          <canvas
            className={styles.convas}
            id="canvas"
            width="1280"
            height="678"
          ></canvas>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.columns}>
            <div className={styles.item}>
              <h1
                className={`${styles.supertitle} ${styles.small} ${styles.na}`}
              >
                Your trusted partner for secure and interoperable mobile
                services
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextComponent;
