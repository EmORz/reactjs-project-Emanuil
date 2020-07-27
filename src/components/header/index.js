import React, { Component } from "react";
import styles from "./index.module.css";
import Link from "../link";
import getNavigation from "../../utils/navigation";
import UserContext from '../../Context'

class Header extends Component {

  static contextType = UserContext
  render() {

    const {
      user,
      loggedIn
    } = this.context

    const links = getNavigation(loggedIn, user);
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

