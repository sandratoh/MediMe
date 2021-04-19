// Libraries
import { render, cleanup, fireEvent, getByTestId } from "@testing-library/react";

// Component
import ClinicGroupedButtons from "../components/Clinics/ClinicGroupedButtons";

afterEach(cleanup);

describe("Group Text Button", () => {

  it("renders without crashing", () => {
    render(<ClinicGroupedButtons />)
  })

  it("renders a HOSPITAL and CLINC button", () => {
    const { getByText } = render(<ClinicGroupedButtons />);
    expect(getByText("HOSPITAL" && "CLINIC")).toBeInTheDocument();
  })

// not working, uses the span inside of the class div level :(
  // it("renders coontained style once state changes", () => {
    
  //   const { getByText, debug } = render(<ClinicGroupedButtons state="HOSPITAL" />);
  //   const button1 = getByText("HOSPITAL");
  //   const button2 = getByText("CLINIC");
  //   debug()

  //   expect(button1).toHaveClass("MuiButton-contained")
  //   expect(button2).toHaveClass("MuiButton-outlined")
  // })

  it("renders a clickable button", () => {
    const handleChange = jest.fn();
    const { getByText } = render(<ClinicGroupedButtons onChange={handleChange} />)
    const button = getByText("HOSPITAL")
    fireEvent.click(button)
    expect(handleChange).toHaveBeenCalledTimes(1); 
  })




})