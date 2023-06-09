import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.jsx'),
      name: 'react-big-schedule',
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
  scripts: [{ src: './copy-css.js', inline: true }],
});
