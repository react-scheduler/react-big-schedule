import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.jsx'),
      name: 'react-scheduler-master',
      formats: ['es'],
      fileName: 'react-scheduler-master-[name]',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dnd', 'react-dnd-html5-backend', 'rrule', 'antd', '@ant-design/icons', 'moment', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
        format: 'esm',
      },
    },
  },
  plugins: [react()],
});
