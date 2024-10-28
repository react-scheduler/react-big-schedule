// Do this as the first thing so that any code reading it knows the right env.
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import fs from 'fs-extra';
import { promisify } from 'util';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function build() {
  const root = path.resolve(__dirname, '..');
  const sourceDir = path.resolve(root, 'src');
  const targetDir = path.resolve(root, 'dist');
  const typingDir = path.resolve(root, 'typing');
  const jsTarget = targetDir;
  const cssTarget = path.resolve(targetDir, 'css');
  const excludedFolders = ['examples', 'main.jsx'];

  try {
    // Validate source and target directories
    await fs.ensureDir(sourceDir);
    await fs.ensureDir(targetDir);

    // Clean previous build
    console.log('Cleaning...');
    await execPromise('npm run clean');

    // Transpile JS files using Babel, excluding specific folders
    console.log('Transpiling JavaScript files with Babel... \n');
    await execPromise(`babel ${sourceDir} --out-dir ${jsTarget} --ignore "${excludedFolders.map(folder => path.join(sourceDir, folder)).join(',')}"`);

    // Copy CSS files
    console.log('Copying CSS Files...');
    await fs.copy(`${sourceDir}/css/`, cssTarget);

    // Copy TypeScript declaration files
    console.log('Copying TypeScript Files...');
    await fs.copy(`${typingDir}/`, targetDir);

    console.log('Build process completed successfully!');
  } catch (e) {
    console.error('Build process failed:', e.message);
    console.error('Stack trace:', e.stack);
    process.exit(1);
  }
}

build();
