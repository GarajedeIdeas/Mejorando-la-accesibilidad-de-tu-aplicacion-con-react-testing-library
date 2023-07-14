import { render, screen } from "@testing-library/react";
import { Lang } from ".";

describe("Lang", () => {
  it("should check a11y features", () => {
    render(<Lang />);

    let topParent = screen.getByRole("heading", {
      name: "Languages",
      level: 2,
    });
    while (topParent.parentElement) {
      if (topParent.getAttribute("lang")) {
        break;
      }
      topParent = topParent.parentElement;
    }
    expect(topParent).toHaveAttribute("lang", "en");
  });
});
