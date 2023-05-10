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
      external: ['react', 'react-dom', 'antd', 'moment', 'react-dnd', 'react-dnd-html5-backend', 'rrule', '@ant-design/icons', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'antd',
          moment: 'moment',
          '@ant-design/icons': 'antdIcons',
          'prop-types': 'PropTypes',
          'react-dnd': 'ReactDnd',
          'react-dnd-html5-backend': 'ReactDndHtml5Backend',
          rrule: 'rrule',
        },
      },
    },
  },
  plugins: [react()],
});
