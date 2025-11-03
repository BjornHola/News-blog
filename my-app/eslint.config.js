import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    ignores: ['dist', 'node_modules', '.husky', '.vite', 'build', '.eslintignore'],
  },
  // TypeScript/TSX configs
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
    },
  },
  // TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'warn',
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.map((config) => config.rules).reduce((acc, rules) => ({ ...acc, ...rules }), {}),
    },
  },
{
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
      ],
      '@typescript-eslint/explicit-function-return-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  // React + React Hooks 
  {
    files: ['**/*.tsx'],
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Prettier vs ESLint
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',
    },
  },
// Configs
  {
    files: ['**/*.config.{ts,js}', '**/eslint.config.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
])
