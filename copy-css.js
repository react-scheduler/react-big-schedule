const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(__dirname, 'src/css/style.css');
const targetPath = path.resolve(__dirname, 'dist/style.css');

fs.copyFile(sourcePath, targetPath, err => {
  if (err) {
    console.error('Failed to copy CSS file:', err);
  } else {
    console.log('CSS file copied successfully!');
  }
});
