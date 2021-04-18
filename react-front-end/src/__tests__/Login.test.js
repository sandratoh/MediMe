// Libraries
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import Login from "../components/Users/Login";

// Helper
import DataProvider from "../components/Provider/DataProvider";

afterEach(cleanup);

describe("Login", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <DataProvider>
          <Login />
        </DataProvider>
      </Router>
    );
  });

