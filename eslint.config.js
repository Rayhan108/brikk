import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,  // Basic ESLint rules
      reactHooks.configs['recommended-latest'],  // React hooks plugin
      reactRefresh.configs.vite,  // React Refresh plugin for Vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // Browser globals
      parserOptions: {
        ecmaVersion: 'latest',  // Latest ECMAScript version
        ecmaFeatures: { jsx: true },  // Enable JSX
        sourceType: 'module',  // Use ES Modules
      },
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], 
       'no-console': 'warn',
          'no-undef': 'error', 
    },
    ignores: ['dist'],  // Correct usage of "ignores" instead of "ignorePatterns"
  },
]);
