import React, { Component } from "react";

import styles from "./app.module.css";
import Footer from "./components/footer";
import Header from "./components/header";




import { BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header />

          <div className={styles.container}>
            <Switch>
         

             
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);
