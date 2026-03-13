import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/text-red-700/g, 'text-areaa');
  content = content.replace(/bg-red-700/g, 'bg-areaa');
  content = content.replace(/border-red-700/g, 'border-areaa');
  content = content.replace(/text-red-800/g, 'text-areaa-dark');
  content = content.replace(/bg-red-800/g, 'bg-areaa-dark');
  content = content.replace(/border-red-800/g, 'border-areaa-dark');
  content = content.replace(/text-red-500/g, 'text-areaa');
  content = content.replace(/bg-red-500/g, 'bg-areaa');
  content = content.replace(/text-red-400/g, 'text-areaa');
  content = content.replace(/bg-red-600/g, 'bg-areaa');
  content = content.replace(/text-red-600/g, 'text-areaa');
  content = content.replace(/bg-red-900/g, 'bg-areaa-dark');
  content = content.replace(/text-red-900/g, 'text-areaa-dark');
  
  // Also add font-serif to headings
  content = content.replace(/<h1 className="/g, '<h1 className="font-serif ');
  content = content.replace(/<h2 className="/g, '<h2 className="font-serif ');
  content = content.replace(/<h3 className="/g, '<h3 className="font-serif ');
  
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      replaceInFile(filePath);
    }
  }
}

walkDir('./src');
console.log('Done replacing colors and fonts.');
