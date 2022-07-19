import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "Surreal Estate"
  );
});
