import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

for (let i = 0; i < inputArray.length; i++){
  let element = inputArray[i].trim();
  let result = [];
  let match;
  let k = 0;
  let nums = [];
  
  const numsRE = element.match(/\d+/g);

  if(numsRE != null){
    nums = Array.from(numsRE);
  }

  console.log(nums);

  var re = /\d+/g;
  while ((match = re.exec(element)) != null) {
      console.log(`match ${nums[k]} with length ${nums[k].length} found at ${match.index} to ${match.index + nums[k].length-1}`);

      result = []

      result.push(nums[k]);
      result.push(i);
      result.push(match.index);
      result.push(nums[k].length);

      console.log(result);
      k++;
  }
  k = 0;
}

/*
Find Number
Detect if valid
Add numbers
*/