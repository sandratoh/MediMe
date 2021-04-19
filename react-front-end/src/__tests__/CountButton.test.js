// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import CountButton from "../components/CountButton";

afterEach(cleanup);

describe("CountButton", () => {
  it("renders without crashing", () => {
    render(<CountButton />);
  });
  
  it("renders with a default count of 1", () => {
    const { getByText } = render(<CountButton />);
    expect(getByText(1)).toBeInTheDocument();
  });

  it("adds to count when clicked on plus button", () => {
    const { getByText, getByTestId } = render(<CountButton />);
    
    const plusButton = getByTestId("plus-button");

    expect(getByText(1)).toBeInTheDocument();

    fireEvent.click(plusButton);

    expect(getByText(2)).toBeInTheDocument();
  });

  it("subtracts from count when clicked on minus button", () => {
    const { getByText, getByTestId } = render(<CountButton />);
    
    const minusButton = getByTestId("minus-button");

    expect(getByText(1)).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(getByText(0)).toBeInTheDocument();
  });

  it("adds to and subtracts from count when clicked on plus and minus button", () => {
    const { getByText, getByTestId } = render(<CountButton />);
    
    const plusButton = getByTestId("plus-button");
    const minusButton = getByTestId("minus-button");

    expect(getByText(1)).toBeInTheDocument();

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(getByText(3)).toBeInTheDocument();
    
    fireEvent.click(minusButton);

    expect(getByText(2)).toBeInTheDocument();
  });

  it("cannot subtract from count if the count is at 0", () => {
    const { getByText, getByTestId } = render(<CountButton />);

    const minusButton = getByTestId("minus-button");

    expect(getByText(1)).toBeInTheDocument();    

    fireEvent.click(minusButton);

    expect(getByText(0)).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(getByText(0)).toBeInTheDocument();
  });
});