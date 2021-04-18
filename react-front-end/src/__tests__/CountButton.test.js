// Libraries
import { render, cleanup, fireEvent } from "@testing-library/react";

// Component
import CountButton from "../components/CountButton";

afterEach(cleanup);

describe("CountButton", () => {
  it("renders without crashing", () => {
    render(<CountButton />);
  });

})