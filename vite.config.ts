import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/tsa.ts',
      name: 'tsa',
      formats: ["es", "umd"],
      fileName: (format) => `tsa.${format}.js`,      
    },
  },
});
