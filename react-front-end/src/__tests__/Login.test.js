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

  it("renders a login button", () => {
    const { getByText } = render(
      <Router>
        <DataProvider>
          <Login />
        </DataProvider>
      </Router>
    );

    const button = getByText("LOGIN");

    expect(button).toBeInTheDocument();
  });

  it("renders an error if email or password is not provided when Login is clicked", () => {
    const onLogin = jest.fn();
    const { getByTestId, getByText } = render(
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

    const button = getByText("LOGIN");

    fireEvent.click(button);

    expect(onLogin).not.toHaveBeenCalled();

    expect(getByText("This field cannot be blank.")).toBeInTheDocument();

    expect(getByTestId("email-input").querySelector("label")).toHaveClass(
      "Mui-error"
    );
    expect(getByTestId("password-input").querySelector("label")).toHaveClass(
      "Mui-error"
    );
  });

  // it("successfully logs in with correct user info", async () => {
  //   const onLogin = jest.fn();
  //   const { getByTestId, getByText, debug } = await render(
  //     <Router>
  //       <DataProvider>
  //         <Login />
  //       </DataProvider>
  //     </Router>
  //   );

  //   expect(getByTestId("email-input").querySelector("textarea")).toHaveValue(
  //     ""
  //   );
  //   expect(getByTestId("password-input").querySelector("input")).toHaveValue(
  //     ""
  //   );

  //   fireEvent.change(getByTestId("email-input").querySelector("textarea"), {
  //     target: { value: "rachel@email.com" },
  //   });
  //   fireEvent.change(getByTestId("password-input").querySelector("input"), {
  //     target: { value: "password" },
  //   });

  //   expect(getByTestId("email-input").querySelector("textarea")).toHaveValue(
  //     "rachel@email.com"
  //   );
  //   expect(getByTestId("password-input").querySelector("input")).toHaveValue(
  //     "password"
  //   );

  //   const button = getByText("LOGIN");

  //   fireEvent.click(button);
  //   debug();
  //   expect(onLogin).toHaveBeenCalledTimes(1);
  // });
});
