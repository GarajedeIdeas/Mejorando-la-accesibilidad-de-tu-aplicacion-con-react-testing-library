import { render, screen } from "@testing-library/react";
import { EmptyLinks } from ".";

describe("EmptyLinks", () => {
  it("should check a11y features", () => {
    render(<EmptyLinks />);
    expect(
      screen.getByRole("link", { name: "link al perfil de linkedin" })
    ).toBeInTheDocument();
  });
});
