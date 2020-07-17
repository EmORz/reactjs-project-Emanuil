import React, { Component } from "react";

import styles from "./app.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Register from "./components/Auth/Register/Register";
import NotFound from "./components/NotFound/NotFound";


import Main from "./Main/Main";

import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Login from "./components/Auth/Login/Login";

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
              <Route path="/" exact>
                <Redirect to="/" />
              </Route>

              <Route path="/login">
                <Main title="Login">
                  <Login />
                </Main>
              </Route>

              <Route path="/register">
                <Main title="Register">
                  <Register />
                </Main>
              </Route>

              <Route path="*">
                <Main title="Not Found">
                  <NotFound />
                </Main>
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);
