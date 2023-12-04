import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

var result = 0;

for (let i = 0; i < inputArray.length; i++){
  let nums = [];
  let element = inputArray[i].trim();
  const gameNum = parseInt(element.match(/[0-9]+/));

  const limit = [12, 13, 14];

  console.log(element);

  nums[0] = gameNum;
  nums[1] = getColorSum(getIndicesOf("red", element), element);
  nums[2] = getColorSum(getIndicesOf("green", element), element);
  nums[3] = getColorSum(getIndicesOf("blue", element), element);
  
  if(nums[1] <= limit[0] && nums[2] <= limit[1] && nums[3] <= limit[2]){
    result += nums[0];
    console.log(nums);
  }
}

console.log(result);

function getIndicesOf(searchStr, str) {
  var searchStrLen = searchStr.length;
  var startIndex = 0, index, indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
}

function getColorSum(indexInput, str){
  var nums = []
  var result = 0;

  indexInput.forEach(element => { 
    var k = element-2;

    while(str[k] != ' '){
      k--;
    }

    var lengthOfNumber = element-2-k;
    nums.push(str.substring(element-1-lengthOfNumber, element-1));

  });

  result += Math.max(...nums)
  return result;
}
