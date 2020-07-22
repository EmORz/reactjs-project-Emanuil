import React, { Component } from "react";
import styles from "./index.module.css";
import Link from "../link";
import getNavigation from "../../utils/navigation";

class Header extends Component {
  render() {
    const links = getNavigation();
    return (
      <header className={styles.navigation}>
        <ul>
          {links.map((nav) => {
            return <Link href={nav.link} title={nav.title} type="header" />;
          })}
      
        </ul>
      </header>
    );
  }
}

export default Header;

