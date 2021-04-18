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

  it("renders an error if email or password is not provided when login is clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId, getByRole, getByLabelText, getByText } = render(
      <Router>
        <DataProvider>
          <Login />
        </DataProvider>
      </Router>
    );

    expect(getByTestId("email-input").querySelector("textarea")).toHaveValue(
      ""
    );
    expect(getByTestId("password-input").querySelector("input")).toHaveValue(
      ""
    );

    const button = getByTestId("login-button").querySelector("button");

    // const button = getByText("LOGIN");

    // const button = getByRole("button", { name: /Login/i });

    // console.log(button);

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);

    // expect(getByText("This field cannot be blank.")).toBeInTheDocument();
  });
});

// expect(getByTestId("email-input").querySelector("label")).toHaveClass(
//   "Mui-error"
// );
// expect(getByTestId("password-input").querySelector("label")).toHaveClass(
//   "Mui-error"
// );
