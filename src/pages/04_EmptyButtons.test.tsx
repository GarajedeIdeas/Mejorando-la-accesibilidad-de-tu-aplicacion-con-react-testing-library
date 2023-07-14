import { render, screen } from "@testing-library/react";
import { EmptyButtons } from ".";

describe("EmptyButtons", () => {
  it("should check a11y features", () => {
    render(<EmptyButtons />);

    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });
});
