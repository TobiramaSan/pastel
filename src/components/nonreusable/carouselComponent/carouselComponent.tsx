"use client";
import React, { useRef } from "react";
import styles from "./carouselComponent.module.css";
import Arrow from "@/assets/svgs/Arrow";
import { CardData } from "@/data/data";
import Card from "@/components/reusable/Card/card";
import { motion, useScroll, useTransform } from "framer-motion";
const CarouselComponent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section
      className={`${styles.section} ${styles.component} ${styles.componentCarouselSolutions}`}
    >
      <div className={`${styles.container} ${styles.mLarge}`}>
        <div className={styles.columns}>
          <div className={styles.item}>
            <div className={styles.textBlockArrow}>
              <div className={styles.group}>
                <div className={styles.label}>Solutions</div>{" "}
                <div className={styles.arrow}>
                  <Arrow />
                </div>
              </div>
              <div className={`${styles.title} ${styles.large}`}>
                <div className={`${styles.word} ${styles.word1}`}>We</div>{" "}
                <div className={`${styles.word} ${styles.word2}`}>deliver</div>{" "}
                <div className={`${styles.word} ${styles.word3}`}>trusted</div>{" "}
                <div className={`${styles.word} ${styles.word4}`}>
                  connectivity
                </div>{" "}
                <div className={`${styles.word} ${styles.word5}`}>and</div>{" "}
                <div className={`${styles.word} ${styles.word6}`}>
                  guarantee
                </div>{" "}
                <div className={`${styles.word} ${styles.word7}`}>
                  interoperability
                </div>{" "}
                <div className={`${styles.word} ${styles.word8}`}>through:</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}

      <motion.div
        className={`${styles.container} ${styles.wide}`}
        ref={targetRef}
      >
        <motion.div className={styles.draggable}>
          <motion.div className={styles.inner} style={{ x }}>
            {CardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                buttonName={item.buttonName}
                secondaryButtonName={item.secondaryButtonName}
                image={item.image}
                color={item.color}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CarouselComponent;
