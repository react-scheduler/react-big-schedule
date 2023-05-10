// import path from 'path';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'components/index.jsx'),
      name: 'react-scheduler-master',
      formats: ['es', 'umd'],
      fileName: format => `react-scheduler-master.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd', 'moment'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'antd',
          moment: 'moment',
        },
      },
    },
  },
  plugins: [react()],
});
