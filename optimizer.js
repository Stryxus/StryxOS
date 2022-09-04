/*
    This script serves as a much more flexible solution for converting assets into better formats. Webpack support for the latest formats sure is slow...
*/
import {
  readFileSync,
  writeFileSync,
  unlinkSync,
  readdirSync,
  statSync,
  access,
  constants,
} from "fs";
import { sep, join, resolve } from "path";

import sharp from "sharp";

function transcodePNGToAVIF(itempath) {
  try {
    const output = itempath.replace(".png", ".avif");
    sharp(readFileSync(itempath))
      .avif({ quality: 70, effort: 9 })
      .toBuffer()
      .then((data) => {
        if (fileExists()) unlinkSync(output);
        writeFileSync(output, data);
        unlinkSync(itempath);
        console.log(`Transcoded Image: ${sep}${itempath} > ${sep}${output}`);
      })
      .catch((err) => console.error(err));
  } catch (e) {
    console.error(`PNG To AVIF Trancoding Error: ${e}`);
  }
}

function getAllFiles(dirPath, arrayOfFiles) {
  let files = readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

function fileExists(path) {
  try {
    access(path, constants.F_OK | constants.W_OK | constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

(() => {
  console.log("Searching for files to optimize...");
  getAllFiles(join(resolve(), "src", "assets")).forEach((file) => {
    if (file.endsWith(".png")) transcodePNGToAVIF(file);
  });
})();
