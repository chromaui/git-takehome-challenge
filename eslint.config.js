import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  js.configs.recommended,
  ...storybook.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  ...nextVitals,
  prettier, // Must be last to override other configs
  globalIgnores([
    'dist',
    '.eslintrc.cjs',
    'eslint.config.js',
    '.storybook',
    'out/**',
    'next-env.d.ts',
    '.next/**',
    'build/**',
  ]),
]);
