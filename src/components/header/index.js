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

// import React from "react";
// import Link from "../link";
// import styles from "./index.module.css";
// import logo from "../../images/white-origami-bird.png";
// import getNavigation from "../../utils/navigation";

// const Header = () => {
//   const links = getNavigation();
//   return (
//     <header className={styles.navigation}>
//       <img className={styles.logo} src={logo} />
//       {links.map((nav) => {
//         return <Link href={nav.link} title={nav.title} type="header" />;
//       })}
//     </header>
//   );
// };

// export default Header;
