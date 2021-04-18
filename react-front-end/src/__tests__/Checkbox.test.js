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

    const foodCheckbox = getByLabelText("Take with food")
      .closest("label")
      .querySelector("input[type='checkbox']");
      
    const waterCheckbox = getByLabelText("Take with water")
      .closest("label")
      .querySelector("input[type='checkbox']");    

      expect(foodCheckbox.checked).toBe(false);
      expect(waterCheckbox.checked).toBe(false);
      
      fireEvent.click(foodCheckbox);
      fireEvent.click(waterCheckbox);
      
      expect(foodCheckbox.checked).toBe(true);
      expect(waterCheckbox.checked).toBe(true);
  });
});