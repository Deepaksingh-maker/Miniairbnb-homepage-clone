import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'playwright',
  timeout: 30_000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5173',
    video: 'on',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  outputDir: 'playwright/artifacts',
});
