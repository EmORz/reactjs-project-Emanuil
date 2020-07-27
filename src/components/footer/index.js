import React, { Component } from "react";
import styles from "./index.module.css";
import Link from "../link";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Footer extends Component {
  static contextType = UserContext;
  render() {
    const { loggedIn, user } = this.context;
    const links = getNavigation(loggedIn, user);

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
  }
}

export default Footer;
