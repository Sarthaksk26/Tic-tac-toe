
// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base path to your repository name
const GITHUB_REPO_NAME = '/Tic-tac-toe/';

export default defineConfig({
  plugins: [react()],
  base: GITHUB_REPO_NAME, // <--- This fixes the asset paths
});
