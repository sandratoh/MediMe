// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import TextInput from "../components/TextInput";

afterEach(cleanup);

describe("Text Input", () => {

  it("renders without crashing", () => {
    render(<TextInput />);
    
  });

  it("renders with validation check on required inputs when nothing is added", () => {
    const { container, getByTestId } = render(<TextInput  />);
    const myTextInput = getByTestId('my--test-id')
  })

});