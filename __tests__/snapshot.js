import { render } from "@testing-library/react";
import HomeContainer from "@/containers/HomeContainer/HomeContainer";

it("renders homepage unchanged", () => {
  const { container } = render(<HomeContainer products={[]} />);
  expect(container).toMatchSnapshot();
});
