import fs from 'fs';
let result = 0;

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

const inputString = inputArray.toString();

for (let i = 0; i < inputArray.length; i++){
  let element = inputArray[i].trim();
  let array1 = [];

  for (let k = 0; k < element.length; k++){
    if (!isNaN(element[k])){
      array1.push(element[k]);
    }
  }
  let resultString = array1[0] + array1[array1.length-1];

  console.log("Line " + i + ": " + resultString);
  result += parseInt(resultString);
}

console.log(result);