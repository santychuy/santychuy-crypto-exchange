import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd());

  return {
    plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  };
});
