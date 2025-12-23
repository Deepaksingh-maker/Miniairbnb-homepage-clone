import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../app/App";

vi.mock('sonner', () => ({ Toaster: () => null, toast: { success: vi.fn(), default: vi.fn() } }));

test("wishlist toggle shows toast and toggles aria-pressed", async () => {
  render(<App />);
  // wait for the first listing
  await screen.findByText(/Malibu, California/i);

  const heartButtons = await screen.findAllByRole('button', { name: /Add to wishlist|Remove from wishlist/i });
  expect(heartButtons.length).toBeGreaterThan(0);

  const firstHeart = heartButtons[0];
  fireEvent.click(firstHeart);

  expect(firstHeart).toHaveAttribute('aria-pressed', 'true');
});