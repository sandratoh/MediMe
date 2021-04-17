//Libraries
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Components
import App from "./components/App";

// Helpers
import DataProvider from "./components/Provider/DataProvider";

// Stylesheet
import "./index.scss";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
