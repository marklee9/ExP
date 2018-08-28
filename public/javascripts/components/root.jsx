import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";

const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default Root;