import { render, screen } from "@testing-library/react";
import { AltText } from ".";

describe("AltText", () => {
  it.skip("should check a11y features", () => {
    render(<AltText />);
    expect(
      screen.getByRole("img", { name: "Camisa de manga larga" })
    ).toBeInTheDocument();
  });
});
