import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import { BrowserRouter as Router } from 'react-router-dom';
//import Navigation from './components/Navigation/Navigation';
import Navigation from "./navigation.js";

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
