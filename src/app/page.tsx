// import Image from "next/image";
import Hero from "@/components/nonreusable/hero/hero";
import styles from "./page.module.css";
import Header from "@/components/reusable/header/header";
import CarouselComponent from "@/components/nonreusable/carouselComponent/carouselComponent";
import Hero2 from "@/components/nonreusable/Hero2/hero2";
import TextComponent from "@/components/nonreusable/textComponent/textComponent";
import AboutUs from "@/components/nonreusable/aboutUsComponent/aboutUs";

export default function Home() {
  return (
    <>
      <div id={styles.app} style={{ opacity: 1 }}>
        <div className={styles.flexible}>
          <div className={styles.background}></div>
          <div className={`${styles.inner} ${styles.gradient}`}>
            <header
              className={styles.header}
              // style={{
              //   transform: "translate(0px, -100%)",
              // }}
            >
              <Header />
            </header>
            <Hero />
            <CarouselComponent />
            <Hero2 />
            <TextComponent />
            <AboutUs />
          </div>
        </div>
      </div>
      <div id={styles.vhr}></div>
      <div className={styles.cursor} id={styles.cursor}>
        <div
          className="follow"
          // style={{
          //   transform: "translate(890px, 575px)",
          // }}
        >
          <span></span>
        </div>
      </div>
    </>
  );
}
