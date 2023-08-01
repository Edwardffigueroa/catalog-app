import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeContainer from "@/containers/HomeContainer/HomeContainer";

jest.mock("../../hooks/useDebouncer", () => (value) => value);

const products = [
  {
    id: 1,
    title: "Product One",
    description: "Description",
    price: 19.99,
    image: "https//:fakeimage.com/url",
  },
  {
    id: 2,
    title: "Product Two",
    description: "Description",
    price: 29.99,
    image: "https//:fakeimage.com/url",
  },
];

describe("HomeContainer component", () => {
  it("renders the heading correctly", () => {
    render(<HomeContainer products={[]} />);

    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("All products");
  });

  it("filters products based on the search input", () => {
    render(<HomeContainer products={products} />);

    const searchBar = screen.getByTestId("search-bar");
    fireEvent.change(searchBar, { target: { value: "Product One" } });

    expect(screen.queryByText("Product Two")).not.toBeInTheDocument();
  });

  it("orders products based on the selected option", () => {});
});
