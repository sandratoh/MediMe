// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import TextButton from "../components/TextButton";

afterEach(cleanup);

describe("TextButton", () => {
  it("renders without crashing", () => {
    render(<TextButton />);
  });

  it("renders its 'children' prop as text", () => {
    const { getByText } = render(<TextButton>Default</TextButton>);
    expect(getByText("Default")).toBeInTheDocument();
  });

  it("renders a default button style", () => {
    const { getByText } = render(
      <TextButton variant="contained">Default</TextButton>
    );
    expect(getByText("Default").closest("button")).toHaveClass(
      "MuiButton-contained"
    );
  });

  it("renders a userAction button", () => {
    const { getByText } = render(
      <TextButton userAction>User Action Button</TextButton>
    );
    expect(getByText("User Action Button").closest("button")).toHaveClass(
      "button--user-action"
    );
  });

  it("renders a groupButtons button", () => {
    const { getByText } = render(
      <TextButton groupButtons>Group Button</TextButton>
    );
    expect(getByText("Group Button").closest("button")).toHaveClass(
      "button--group"
    );
  });

  it("renders the selected button styling in groupButtons", () => {
    const { getByText } = render(
      <TextButton groupButtons selected>
        Group Button - Selected
      </TextButton>
    );
    expect(getByText("Group Button - Selected").closest("button")).toHaveClass(
      "MuiButton-contained"
    );
  });

  it("renders the unselected button(s) styling in groupButtons", () => {
    const { getByText } = render(
      <TextButton groupButtons>Group Button - Unselected</TextButton>
    );
    expect(
      getByText("Group Button - Unselected").closest("button")
    ).toHaveClass("MuiButton-outlined");
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <TextButton onClick={handleClick}>Clickable</TextButton>
    );

    const button = getByText("Clickable");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a disabled button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <TextButton disabled onClick={handleClick}>
        Disabled
      </TextButton>
    );

    const button = getByText("Disabled");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
