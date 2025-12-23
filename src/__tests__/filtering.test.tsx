import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../app/App";

test("category filtering shows correct results", async () => {
  render(<App />);

  // Wait for first property to appear
  const firstCard = await screen.findByText(/Malibu, California/i, {}, { timeout: 2000 });
  expect(firstCard).toBeInTheDocument();

  const beachButton = screen.getByRole("button", { name: /Beachfront/i });
  fireEvent.click(beachButton);

  // After clicking Beachfront, Malibu should still show (it's Beachfront)
  expect(await screen.findByText(/Malibu, California/i)).toBeInTheDocument();
});