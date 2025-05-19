import React from "react";
import styles from "./footer.module.css";
import { FooterLinks } from "@/data/data";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.carousel}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.supertitle}>
              Empowering the future of connectivity
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.supertitle}>
              Empowering the future of connectivity
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.columns} ${styles.columnsTop}`}>
          <div className={`${styles.item} ${styles.magnet}`}>
            <a href="/" className={styles.brand}>
              <img
                src={
                  "https://trustedconnectivity.valid.com/wp-content/themes/valid/img/logo-trusted.svg"
                }
                alt="go to home page"
              />
            </a>
            <div className={styles.newsletter}>
              <div className={`${styles.title} ${styles.large}`}>
                Subscribe to <br /> our newsletter
              </div>
              <div className={`${styles.wpcf7} ${styles.js}`}>
                <div className={styles.screenReaderResponse}></div>
                <form
                  action=""
                  className={`${styles.wpcf7Form} ${styles.init}`}
                >
                  <div className="" style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="1805"></input>
                    <input
                      type="hidden"
                      name="_wpcf7_version"
                      value="6.0.3"
                    ></input>
                    <input
                      type="hidden"
                      name="_wpcf7_locale"
                      value="en_US"
                    ></input>
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="12"
                    ></input>
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      value=""
                    ></input>
                    <input
                      type="hidden"
                      name="iside_cf7_pardot_formHandlerUrl"
                      value="https://go.valid.com/l/1056743/2024-12-20/l8ngf"
                    ></input>
                  </div>
                  <span className={styles.wpcf7FormControlWrap}>
                    <input size={40} placeholder="Email" type="email" />
                  </span>
                  <input
                    type="text"
                    className={`${styles.wpcf7FormControl} ${styles.wpcf7Submit} ${styles.hasSpinner}`}
                  />
                  <span className={styles.wpcf7Spinner}></span>
                  <div className={styles.wpcf7ResponseOutput}></div>
                </form>
              </div>
            </div>
          </div>
          {FooterLinks.map((item, index) => (
            <div className={`${styles.item} ${styles.magnet}`} key={index}>
              <h1 className={`${styles.title} ${styles.xsmall}`}>
                {item.mainTitle}
              </h1>
              <ul className={`${styles.menu} ${styles.menuInsights}`}>
                {item.arr.map((item, index) => (
                  <li
                    id="menuItem"
                    className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage}`}
                    key={index}
                  >
                    <a href={item.links}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${styles.columns} ${styles.columnsBottom}`}>
          <div className={styles.item}>
            <ul className={`${styles.menuLegal} ${styles.menu}`}>
              <li
                id="menu-item-233"
                className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem233}`}
              >
                <a href="https://trustedconnectivity.valid.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li
                id="menu-item-231"
                className={`${styles.menuItem} ${styles.menuItemTypePost_type} ${styles.menuItemObjectPage} ${styles.menuItem231}`}
              >
                <a href="https://trustedconnectivity.valid.com/terms-and-conditions/">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <ul
              id="menu-social"
              className={`${styles.menu} ${styles.menuSocial}`}
            >
              <li
                id="menu-item-236"
                className={`${styles.menuItem} ${styles.menuItemTypeCustom} ${styles.menuItemObjectCustom} ${styles.menuItem236}`}
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/valid-s-a-/"
                >
                  <i className={`${styles.fab} ${styles.faLinkedIn}`}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
