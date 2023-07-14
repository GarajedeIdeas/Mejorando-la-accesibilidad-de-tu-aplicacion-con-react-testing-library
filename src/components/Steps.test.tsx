import { render, screen, within } from "@testing-library/react";
import { vi } from "vitest";
import { Steps } from "./Steps";

vi.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/empty-links",
  }),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("Stepper", () => {
  it("should render the correct active step", () => {
    render(<Steps />);
    const step = screen.getByRole("listitem", {
      current: "step",
    });
    expect(within(step).getByText("Enlaces")).toBeInTheDocument();
  });
});
