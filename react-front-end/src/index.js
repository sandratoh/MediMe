import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import axios from "axios";
import DataProvider from "./components/Provider/DataProvider";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(
  // <React.StrictMode>
  <DataProvider>
    <App />
  </DataProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
