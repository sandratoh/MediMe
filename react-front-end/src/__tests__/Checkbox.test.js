// Libraries
import { render, cleanup, fireEvent, prettyDOM } from "@testing-library/react";

// Component
import CheckBox from "../components/Checkbox";

afterEach(cleanup);

describe("Checkbox", () => {
  it("renders without crashing", () => {
    render(<CheckBox />);
  });

  it("renders a checkbox with the label 'Take with food'", () => {
    const { getByText } = render(<CheckBox />);
    expect(getByText("Take with food")).toBeInTheDocument();
  });

  it("renders a checkbox with the label 'Take with water'", () => {
    const { getByText } = render(<CheckBox />);
    expect(getByText("Take with water")).toBeInTheDocument();
  });

  it("renders unchecked checkboxes on default", () => {
    const { getByLabelText } = render(<CheckBox />);

    const foodCheckboxWrapper = getByLabelText("Take with food").closest("label");
    const foodCheckbox = foodCheckboxWrapper.querySelector("input[type='checkbox']");
    // console.log(prettyDOM(foodCheckbox))

    const waterCheckboxWrapper = getByLabelText("Take with water").closest("label");
    const waterCheckbox = waterCheckboxWrapper.querySelector("input[type='checkbox'");
    
    expect(foodCheckbox.checked).toBe(false);
    expect(waterCheckbox.checked).toBe(false);
    // Alternate test methods (all passes)
    expect(foodCheckbox).toHaveProperty('checked', false);
    expect(waterCheckbox).toHaveProperty('checked', false);
  })
})