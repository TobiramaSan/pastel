// import Image from "next/image";
import Hero from "@/components/nonreusable/hero/hero";
import styles from "./page.module.css";
import Header from "@/components/reusable/header/header";

export default function Home() {
  return (
    <>
      <div id={styles.app}>
        <div className={styles.flexible}>
          <div className={styles.background}></div>
          <div className={`${styles.inner} ${styles.gradient}`}>
            <header className={styles.header}>
              <Header />
            </header>
            <Hero />
          </div>
        </div>
      </div>
      <div id={styles.vhr}></div>
      <div className={styles.cursor} id={styles.cursor}>
        <div
          className="follow"
          style={{
            transform: "translate(890px, 575px)",
          }}
        >
          <span></span>
        </div>
      </div>
    </>
  );
}
