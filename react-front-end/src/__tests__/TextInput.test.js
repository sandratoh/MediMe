// Libraries
import { render, cleanup } from "@testing-library/react";

// Component
import TextInput from "../components/TextInput";

afterEach(cleanup);

describe("Text Input", () => {
  it("renders without crashing", () => {
    render(<TextInput />);
  });

  it("renders with validation check on required inputs when nothing is added", () => {
    const { getByText } = render(<TextInput  require validate />);
    expect(getByText("This field cannot be blank.")).toBeInTheDocument();
  });
 
  it("renders with the correct value from input", () => {
    const { getByText } = render(<TextInput value="Dr. Gale Dodek-Wenner" />);
    expect(getByText('Dr. Gale Dodek-Wenner')).toBeInTheDocument();
  });
});