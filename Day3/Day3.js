import fs from 'fs';

const inputArray = fs.readFileSync('./input.txt', { encoding: "utf-8" }) // read input.txt content
  .toString('UTF8')
  .split('\n');

let finalResult = [];
let checkSymbol = ["*", "$", "%", "&", "=", "/", "@", "-", "#", "+"];

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

      console.log(element);
      console.log(isNeighbourSymbol(result, element));
      console.log("result: " + result);
      k++;
  }
  k = 0;
}

console.log(finalResult);
console.log(finalResult.reduce((a,b)=> a+b),0);

function isNeighbourSymbol(num, element){
    let i = 0;
    while (i < 2){
      if(num[3] == 1) i = 1;

      let check = [];
      let numY = num[1];
      let numX = num[2]+(((num[3]-1)/2)*i*2);

      console.log(numX, numY);

      console.log("Configuring Neighbours \n");

      let n1, n2, n3, n4, n5, n6, n7, n8;

      try { n1 = inputArray[numY-1][numX]; } catch (error) { n1 = ""; }
      try { n2 = inputArray[numY-1][numX-1]; } catch (error) { n2 = ""; }
      try { n3 = inputArray[numY][numX-1]; } catch (error) { n3 = ""; }
      try { n4 = inputArray[numY+1][numX-1]; } catch (error) { n4 = ""; }
      try { n5 = inputArray[numY+1][numX]; } catch (error) { n5 = ""; }
      try { n6 = inputArray[numY+1][numX+1]; } catch (error) { n6 = ""; }
      try { n7 = inputArray[numY][numX+1]; } catch (error) { n7 = ""; }
      try { n8 = inputArray[numY-1][numX+1]; } catch (error) { n8 = ""; }

      console.log(`Neighbours of ${inputArray[numY][numX]} are: \n`);

      check.push(n1);
      check.push(n2);
      check.push(n3);
      check.push(n4);
      check.push(n5);
      check.push(n6);
      check.push(n7);
      check.push(n8);

      if(isSymbol(check, num[0]) == true) {break;}

      i++;
    }
  }

function isSymbol(x, num){
  console.log("Is Symbol start. x: " + x);
  console.log("Is Symbol start. num: " + num);

  console.log("Contains '*'? " + x.includes("*"));

  if(x.some(r=> checkSymbol.includes(r))
  ){
    finalResult.push(parseInt(num));
    return true;
  }
}

/*
Find Number
Detect if valid
Add numbers
*/

// problems:
// if first number checks -> break loop go to next number, else number might be saved multiple times
// symbol check only includes "*"