import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import axios from "axios";
import DataProvider from "./components/Provider/DataProvider";
import ClinicProvider from "./components/Provider/ClinicContext";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(
  // <React.StrictMode>
  <DataProvider>
    <ClinicProvider>
      <App />
    </ClinicProvider>
  </DataProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
