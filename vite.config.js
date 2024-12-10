import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      protocol: 'ws', // Ensure WebSocket is being used instead of WSS
      host: 'localhost', // This is correct for a local setup
      port: 5173, // Ensure this is the correct port for your Vite server
    },
  },
});
