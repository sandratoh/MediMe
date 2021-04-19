// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import ClinicGroupedButtons from "../components/Clinics/ClinicGroupedButtons";

afterEach(cleanup);

describe("Group Text Button", () => {

  const clinicGroupArray = [
    { id: 1, name: "HOSPITAL" },
    { id: 2, name: "CLINIC" },
  ];

  it("renders without crashing", () => {
    render(<ClinicGroupedButtons />)
  })
})