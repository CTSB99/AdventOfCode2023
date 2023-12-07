import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

let resultArray = [];
let result = [];

inputArray.forEach(element => {
element = element.split(/[:|]/);
element.shift();
console.log(element);
resultArray.push(element);
});

console.log(resultArray);

resultArray.forEach(element => {
});