import ProductCard from "@/components/ProductCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const productObject = {
  title: "Product Title",
  price: "19.99",
  description: "Product Description",
  image: "/path/to/product-image.jpg",
};

describe("ProductCard component should", () => {
  it("renders product info correctly", () => {
    const { getByText, getByAltText } = render(
      <ProductCard {...productObject} />
    );

    expect(getByText(productObject.title)).toBeInTheDocument();
    expect(getByText(`$${productObject.price}`)).toBeInTheDocument();
    expect(getByText(productObject.description)).toBeInTheDocument();
    expect(getByAltText("product-detail")).toBeInTheDocument();
  });

  it("renders the correct favorite icon", () => {
    const { getByAltText } = render(<ProductCard {...productObject} />);

    expect(getByAltText("Delete-from-favorite-icon")).toBeInTheDocument();
  });
});
