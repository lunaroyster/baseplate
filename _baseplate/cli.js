#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function cloneBaseplate(targetDir) {
  try {
    console.log(`Cloning baseplate into ${targetDir}...`);
    execSync(`git clone https://github.com/lunaroyster/baseplate ${targetDir}`, {
      stdio: 'inherit'
    });
    console.log('Successfully cloned baseplate!');
  } catch (error) {
    console.error('Failed to clone repository:', error.message);
    process.exit(1);
  }
}

function removeBaseplateMetaRepo(targetDir) {
  const metaRepoPath = path.join(targetDir, '_baseplate');
  fs.rmSync(metaRepoPath, { recursive: true, force: true });
}

function clearGit(targetDir) {
  const gitPath = path.join(targetDir, '.git');
  fs.rmSync(gitPath, { recursive: true, force: true });
}

function gitInit(targetDir) {
  execSync(`git init`, { stdio: 'inherit', cwd: targetDir });
  execSync(`git add .`, { stdio: 'inherit', cwd: targetDir });
  execSync(`git commit -m "Initial commit"`, { stdio: 'inherit', cwd: targetDir });
}

function main() {
  const target = process.argv[2] || '.';

  if (fs.existsSync(target) && fs.readdirSync(target).length > 0) {
    console.error(`Target directory ${target} is not empty!`);
    process.exit(1);
  }
  
  const fullpath = path.resolve(target);
  
  cloneBaseplate(fullpath);
  removeBaseplateMetaRepo(fullpath);
  clearGit(fullpath);
  gitInit(fullpath)
}

main();