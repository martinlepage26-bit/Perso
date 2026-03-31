import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: 180_000,
  expect: {
    timeout: 10_000,
  },
  outputDir: 'output/playwright/test-results',
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'output/playwright/report' }],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4519',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4519 --strictPort',
    url: 'http://127.0.0.1:4519/lotus/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
