import "./assets/bootstrap-custom.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./assets/Header";
import { HashRouter as Router } from "react-router-dom";

 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
