import { render, screen } from "@testing-library/react";
import { getServerSideProducts } from "../api/products";
import "@testing-library/jest-dom";
import Home from "@/app/page";

jest.mock("../api/products");

const mockedProducts = [
  {
    id: 1,
    title: "Product 1",
    price: "19.99",
    description: "Product description 1",
    image: "/path/to/product-1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: "29.99",
    description: "Product description 2",
    image: "/path/to/product-2.jpg",
  },
];

describe("Home page should", () => {
  it("renders products fetched from the server correctly", async () => {
    getServerSideProducts.mockResolvedValue({ products: mockedProducts });

    render(<Home />);

    await screen.findByTestId("heading");

    const productElements = screen.getAllByTestId("product-card");
    expect(productElements).toHaveLength(mockedProducts.length);

    for (let i = 0; i < mockedProducts.length; i++) {
      const product = mockedProducts[i];

      const titleElement = screen.getByText(product.title);
      const priceElement = screen.getByText(`$${product.price}`);
      const descriptionElement = screen.getByText(product.description);
      const imageElement = screen.getByAltText("Product detail");

      expect(titleElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    }
  });
});
