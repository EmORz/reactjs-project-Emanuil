import React from "react";
import styles from "./index.module.css";
import Link from "../link";
import getNavigation from "../../utils/navigation";

const Footer = () => {
  const links = getNavigation();
  return (
    <footer className={styles.footer}>
      <ul>
        {links.map((nav) => {
          return <Link href={nav.link} title={nav.title} type="footer" />;
        })}
  
      </ul>
      <p className={styles.footerSign}>Emanuil Project 2020</p>
    </footer>
  );
};

export default Footer;
