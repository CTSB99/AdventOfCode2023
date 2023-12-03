import fs from 'fs';
let result = 0;

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

for (let i = 0; i < inputArray.length; i++){
  let element = inputArray[i].trim();

  // Part Two
  element = element
  .replaceAll("one", "one1one")
  .replaceAll("two", "two2two")
  .replaceAll("three", "three3three")
  .replaceAll("four", "four4four")
  .replaceAll("five", "five5five")
  .replaceAll("six", "six6six")
  .replaceAll("seven", "seven7seven")
  .replaceAll("eight", "eight8eight")
  .replaceAll("nine", "nine9nine")

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