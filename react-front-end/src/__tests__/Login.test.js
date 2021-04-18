// Libraries
import { BrowserRouter as Router } from "react-router-dom";
import { render, within, cleanup, fireEvent } from "@testing-library/react";

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

  it("renders without email if not provided", () => {
    const { getByTestId } = render(
      <Router>
        <DataProvider>
          <Login />
        </DataProvider>
      </Router>
    );
    expect(getByTestId("email-input").querySelector("textarea")).toHaveValue(
      ""
    );
  });

  it("renders without password if not provided", () => {
    const { getByTestId } = render(
      <Router>
        <DataProvider>
          <Login />
        </DataProvider>
      </Router>
    );
    expect(getByTestId("password-input").querySelector("input")).toHaveValue(
      ""
    );
  });
});
