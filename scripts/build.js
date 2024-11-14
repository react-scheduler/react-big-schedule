process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

const { promisify } = require('util');
const path = require('path');
const fs = require('fs-extra');
const exec = promisify(require('child_process').exec);

async function build() {
  const root = path.resolve(__dirname, '..');
  const sourceDir = path.resolve(root, 'src');
  const targetDir = path.resolve(root, 'dist');
  const typingDir = path.resolve(root, 'typing');
  const jsTarget = targetDir;
  const cssTarget = path.resolve(targetDir, 'css');
  const excludedFolders = ['examples', 'main.jsx'].map(folder => path.join(sourceDir, folder)).join(',');

  try {
    // Clean previous build
    console.log('Cleaning...');
    await exec('npx rimraf dist');
    await exec('mkdir dist');

    // Transpiling and copying files
    console.log('Processing files...');
    await Promise.all([
      exec(`npx babel ${sourceDir} --out-dir ${jsTarget} --ignore "${excludedFolders}"`),
      fs.copy(path.join(sourceDir, 'css'), cssTarget),
      fs.copy(typingDir, targetDir)
    ]);

    console.log('Success!');
  } catch (e) {
    console.error('Build process failed:', e.message);
    console.error('Stack trace:', e.stack);
    process.exit(1);
  }
}

build();
