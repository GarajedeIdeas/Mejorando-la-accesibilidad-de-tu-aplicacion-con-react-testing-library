import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Labels } from ".";

describe("Labels", () => {
  it("should check a11y features", async () => {
    userEvent.setup();

    render(<Labels />);

    const nameInput = screen.getByLabelText("Nombre");
    expect(nameInput).toBeInTheDocument();

    nameInput.focus();
    expect(nameInput).toHaveFocus();

    await userEvent.tab();
    await userEvent.tab();
    expect(nameInput).not.toHaveFocus();

    expect(screen.getByLabelText("Domicilio")).toHaveFocus();
  });
});
