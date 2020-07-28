import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
// import ShareThoughtsPage from './pages/share-thoughts'
import Login from "./pages/login";
import Register from "./pages/register";
//import Error from './pages/error'
import Profile from "./pages/profile";
import Error from "./pages/error";
import About from "./pages/about";
import UserContex from "./Context";
import UserContext from "./Context";
import CreateProduct from "./pages/create-product";

class Navigation extends Component {
  static contextType = UserContext;

  render() {
    const { loggedIn } = this.context;
    //debugger

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          {loggedIn && <Route path="/profile/:userid" component={Profile} />}
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          {loggedIn && <Route path="/create-product" component={CreateProduct} />}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;
