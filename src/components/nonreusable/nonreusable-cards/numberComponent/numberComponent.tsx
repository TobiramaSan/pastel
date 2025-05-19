import React from "react";
import styles from "./numberComponent.module.css";
import Link from "next/link";

interface detailsDataProps {
  number: string | number;
  detail: string;
}
const NumberComponent = () => {
  const detailsData: detailsDataProps[] = [
    {
      number: "900",
      detail: "Million connected devices use Valid&apos;s technology",
    },
    {
      number: "100",
      detail: "Remote SIM provisioning Platform implemented worldwide",
    },
    {
      number: "Top5",
      detail: "SIM Manufacturer globally",
    },
  ];
  return (
    <div
      className={`${styles.component} ${styles.componentCompositionNumbers}`}
    >
      <div className={styles.container}>
        <div className={styles.textBlockCenter}>
          <h1 className={styles.label}>About Us</h1>
          <h2 className={styles.title}>
            We offer trusted connectivity solutions to device makers,
            connectivity providers and IoT players worldwide
          </h2>
          <Link href={"/"} className={styles.button}>
            <div className="text">
              <span className="">More about us</span>
            </div>
          </Link>
        </div>
        <div className={styles.columns}>
          {detailsData.map((item: detailsDataProps, index: number) => (
            <Details key={index} number={item.number} detail={item.detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberComponent;

const Details = ({
  number,
  detail,
}: {
  number: string | number;
  detail: string;
}) => {
  return (
    <div className={`${styles.item} ${styles.item0}`}>
      <h1 className={`${styles.supertitle} ${styles.mediu} ${styles.na}`}>
        {number}
      </h1>
      <h2 className={`${styles.heading} ${styles.medium}`}>{detail}</h2>
    </div>
  );
};
