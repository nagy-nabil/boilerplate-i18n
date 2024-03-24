import fs from 'fs/promises';
import path from 'path';

const postsDirectory = path.join(process.cwd(), "_posts");

const [, , fileToInsert] = process.argv;

if (!fileToInsert) {
  console.error("Usage: node script.js <file_to_insert>");
  console.error("example: node script.js nextjs-power.md");
  process.exit(1);
}

const content = `
---
title: "title"
excerpt: "description"
coverImage: "/assets/blog/"
date: "2020-03-16T05:35:07.322Z"
author:
  name: "name"
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---
`
async function insertFileInDirectories(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        const destFile = path.join(filePath, fileToInsert);
        await fs.writeFile(destFile, content);
        console.log(`created ${destFile}`)
      }
    }
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

// Call function with posts directory
insertFileInDirectories(postsDirectory);
