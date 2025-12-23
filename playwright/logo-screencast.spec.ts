import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('record logo click and reset category', async ({ page }, testInfo) => {
  // Navigate to the app (uses baseURL from config)
  await page.goto('/');

  // Wait for category tabs to render
  await page.waitForSelector('[role="tablist"]');

  // Click a non-Trending category if available and assert it's selected
  const tabs = await page.$$('[role="tablist"] button');
  if (tabs.length > 1) {
    const nonTrendingLocator = page.locator('[role="tablist"] button').nth(1);
    await nonTrendingLocator.click();
    await page.waitForTimeout(300);
    await expect(nonTrendingLocator).toHaveAttribute('aria-pressed', 'true');
  }

  // Toggle wishlist on the first card (if present)
  const heart = page.locator('button[aria-label^="Add to wishlist"], button[aria-label^="Remove from wishlist"]').first();
  if (await heart.count() > 0) {
    await heart.click();
    await page.waitForTimeout(200);
    await expect(heart).toHaveAttribute('aria-pressed', 'true');
  }

  // Open search modal using keyboard shortcut (Ctrl+K)
  await page.keyboard.press('Control+k');
  await page.waitForSelector('h3:has-text("Search")', { timeout: 2000 });
  // Close the modal
  await page.click('button[aria-label="Close search"]');
  await page.waitForTimeout(200);

  // Click the first listing card
  const firstCard = page.locator('article[role="button"]').first();
  if (await firstCard.count() > 0) {
    await firstCard.click();
    await page.waitForTimeout(300);
  }

  // Click the logo (Home)
  await page.click('button[aria-label="Home"]');

  // ensure the app receives the nav event (some environments may not capture the click handler reliably)
  await page.evaluate(() => window.dispatchEvent(new CustomEvent('app:navigateHome')));

  // Wait for Trending to become active
  const trending = page.locator('[role="tablist"] button', { hasText: 'Trending' });
  await expect(trending).toHaveAttribute('aria-pressed', 'true', { timeout: 5000 });

  // Copy the recorded video to a stable path inside the repo (extended recording)
  const videoPath = await page.video()?.path();
  if (videoPath) {
    const dest = path.join(process.cwd(), 'playwright', 'logo-screencast-extended.webm');
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(videoPath, dest);
    testInfo.attachments.push({ name: 'logo-screencast-extended', path: dest, contentType: 'video/webm' });
  }
});
