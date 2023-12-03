import fs from 'fs';

const input = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

console.log(input);