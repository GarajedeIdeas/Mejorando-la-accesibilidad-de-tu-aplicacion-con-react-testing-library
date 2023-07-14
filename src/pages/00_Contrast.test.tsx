import { render, screen } from "@testing-library/react";
import ColorContrastChecker from "color-contrast-checker";
import { Contrast } from ".";

describe("Contrast", () => {
  it("should check a11y contrast", () => {
    render(<Contrast />);

    const target = screen.getByText("Gris (#767676) en blanco");
    const color = getComputedStyle(target).getPropertyValue("color");
    const backgroundColor =
      getComputedStyle(target).getPropertyValue("background-color");
    const fontSize = parseInt(
      getComputedStyle(target).getPropertyValue("font-size")
    );
    const ccc = new ColorContrastChecker();
    expect(ccc.isLevelAA(color, backgroundColor, fontSize)).toBe(true);
  });
});
