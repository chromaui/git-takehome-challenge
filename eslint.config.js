import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';

export default [
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  ...storybook.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    ignores: ['dist', '.eslintrc.cjs', 'eslint.config.js', '.storybook'],
  },
];
