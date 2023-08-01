import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorFallback from "@/components/ErrorFallback";

const mockOnClick = jest.fn();

describe("ErrorFallback component should", () => {
  it("renders error message and button correctly", () => {
    const { getByText } = render(<ErrorFallback onClick={mockOnClick} />);

    expect(getByText("Something went wrong! =(")).toBeInTheDocument();
    expect(getByText("Try again")).toBeInTheDocument();
  });

  it("calls onClick when the 'Try again' button is clicked", () => {
    const { getByText } = render(<ErrorFallback onClick={mockOnClick} />);

    const tryAgainButton = getByText("Try again");
    fireEvent.click(tryAgainButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
