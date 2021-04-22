// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import ClinicGroupedButtons from "../components/Clinics/ClinicGroupedButtons";

afterEach(cleanup);

describe("Group Text Button", () => {
  it("renders without crashing", () => {
    render(<ClinicGroupedButtons />);
  });

  it("renders a HOSPITAL and CLINC button", () => {
    const { getByText } = render(<ClinicGroupedButtons />);
    expect(getByText("HOSPITAL" && "CLINIC")).toBeInTheDocument();
  });

  it("renders a clickable button", () => {
    const handleChange = jest.fn();

    const { getByText } = render(<ClinicGroupedButtons onChange={handleChange} />);

    const button = getByText("HOSPITAL");

    fireEvent.click(button);

    expect(handleChange).toHaveBeenCalledTimes(1); 
  });
});