import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
// import ShareThoughtsPage from './pages/share-thoughts'
import Login from "./pages/login";
import Register from "./pages/register";
//import Error from './pages/error'
import Profile from './pages/profile'
import Error from "./pages/error";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userid" component={Profile} />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
