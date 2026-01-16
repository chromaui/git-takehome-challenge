import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, configDefaults } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Monorepo vitest configuration with multiple projects
// When running from root: `yarn test` runs all projects
// When running from workspace: uses workspace's local vitest.config.ts
export default defineConfig({
  test: {
    projects: [
      // Frontend tests
      {
        root: './services/frontend',
        test: {
          name: 'frontend',
          globals: true,
          include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        },
        resolve: {
          alias: {
            '@': path.resolve(dirname, './services/frontend'),
          },
        },
        plugins: [react()],
      },
      // Backend tests
      {
        
        root: './services/backend',
        test: {
          name: 'backend',
          globals: true,
          environment: 'node',
          include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
          env: {
            NODE_ENV: 'test',
          },
        },
        resolve: {
          alias: {
            '@': path.resolve(dirname, './services/backend/src'),
          },
        },
      },
      // Storybook tests
      {
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          exclude: [...configDefaults.exclude],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
