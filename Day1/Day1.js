import fs from 'fs';
let result = 0;

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

for (let i = 0; i < inputArray.length; i++){
  let element = inputArray[i].trim();
  let resultArray = [];

  for (let k = 0; k < element.length; k++){
    if (!isNaN(element[k])){
      resultArray.push(element[k]);
    }
  }
  let resultString = resultArray[0] + resultArray[resultArray.length-1];

  console.log("Line " + i + ": " + resultString);
  result += parseInt(resultString);
}

console.log(result);