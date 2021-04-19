// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

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

    const foodCheckbox = getByLabelText("Take with food")
      .closest("label")
      .querySelector("input[type='checkbox']");
      
    const waterCheckbox = getByLabelText("Take with water")
      .closest("label")
      .querySelector("input[type='checkbox']");   
    
    expect(foodCheckbox.checked).toBe(false);
    expect(waterCheckbox.checked).toBe(false);
  });

  it("renders checked checkboxes when clicked", () => {
    const { getByLabelText } = render(<CheckBox />);

    const foodCheckboxWrapper = getByLabelText("Take with food").closest("label").firstChild;
    const foodCheckbox = foodCheckboxWrapper.querySelector("input[type='checkbox']");
    
    const waterCheckboxWrapper = getByLabelText("Take with water").closest("label").firstChild;
    const waterCheckbox = waterCheckboxWrapper.querySelector("input[type='checkbox']");    

    expect(foodCheckbox.checked).toBe(false);
    expect(waterCheckbox.checked).toBe(false);
    
    expect(foodCheckboxWrapper).not.toHaveClass("Mui-checked");
    expect(waterCheckboxWrapper).not.toHaveClass("Mui-checked");
      
    fireEvent.click(foodCheckbox);
    fireEvent.click(waterCheckbox);

    expect(foodCheckbox.checked).toBe(true);
    expect(waterCheckbox.checked).toBe(true);
    
    expect(foodCheckboxWrapper).toHaveClass("Mui-checked");
    expect(waterCheckboxWrapper).toHaveClass("Mui-checked");
  });
});