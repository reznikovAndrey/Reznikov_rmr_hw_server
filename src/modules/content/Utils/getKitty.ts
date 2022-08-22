import fs from 'fs/promises';

export default async (filename: string) => fs.readFile(`./src/assets/${filename}`);
