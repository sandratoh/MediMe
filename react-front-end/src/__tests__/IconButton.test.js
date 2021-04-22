// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import IconButton from "../components/IconButton";

afterEach(cleanup);

describe("IconButton", () => {
  it("renders without crashing", () => {
    render(<IconButton />);
  });

  it("renders its 'children' prop as text", () => {
    const { getByText } = render(<IconButton>Default</IconButton>);
    expect(getByText("Default")).toBeInTheDocument();
  });

  it("renders a default button style", () => {
    const { getByText } = render(<IconButton save>Default</IconButton>);
    expect(getByText("Default").closest("button")).toHaveClass("button");
  });

  it("renders a save button", () => {
    const { getByText } = render(<IconButton save>Save</IconButton>);
    expect(getByText("Save").closest("button")).toHaveClass("button--save");
  });

  it("renders a delete button", () => {
    const { getByText } = render(<IconButton delete>Delete</IconButton>);
    expect(getByText("Delete").closest("button")).toHaveClass("button--delete");
  });

  it("renders a new button", () => {
    const { getByText } = render(<IconButton new>New</IconButton>);
    expect(getByText("New").closest("button")).toHaveClass("button--new");
  });

  it("renders a new dose button", () => {
    const { getByText } = render(<IconButton newDose>New Dose</IconButton>);
    expect(getByText("New Dose").closest("button")).toHaveClass("button--new-dose");
  });

  it("renders a cancel button", () => {
    const { getByText } = render(<IconButton cancel>Cancel</IconButton>);
    expect(getByText("Cancel").closest("button")).toHaveClass("button--cancel");
  });

  it("renders a edit button", () => {
    const { getByText } = render(<IconButton edit>Edit</IconButton>);
    expect(getByText("Edit").closest("button")).toHaveClass("button--edit");
  });

  it("renders a login button", () => {
    const { getByText } = render(<IconButton login>Login</IconButton>);
    expect(getByText("Login").closest("button")).toHaveClass("button--login");
  });

  it("renders a clickable button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <IconButton onClick={handleClick}>Clickable</IconButton>
    );

    const button = getByText("Clickable");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a disabled button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <IconButton disabled onClick={handleClick}>
        Disabled
      </IconButton>
    );

    const button = getByText("Disabled");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});