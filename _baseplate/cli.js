#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

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


const target = process.argv[2] || '.';

const fs = require('fs');

if (fs.existsSync(target) && fs.readdirSync(target).length > 0) {
  console.error(`Target directory ${target} is not empty!`);
  process.exit(1);
}

const fullpath = path.resolve(target);

cloneBaseplate(fullpath);
removeBaseplateMetaRepo(fullpath);