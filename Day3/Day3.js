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

      console.log(element);
      console.log(isNeighbourSymbol(result, element));
      console.log(result);
      k++;
  }
  k = 0;
}

function isNeighbourSymbol(num, element){
    let i = 0;
    while (i < 2){
      console.log("i: " + i);
      console.log("num: " + num)
      let numY = num[1];
      let numX = num[2]+(((num[3]-1)/2)*i*2);

      console.log(numX, numY);

      if(numY*numX != 0 && numY < element.length-1 && numX < inputArray.length-1){
        console.log("Configuring Neighbours \n");

        let n1 = inputArray[numY-1][numX];
        let n2 = inputArray[numY-1][numX-1];
        let n3 = inputArray[numY][numX-1];
        let n4 = inputArray[numY+1][numX-1];
        let n5 = inputArray[numY+1][numX];
        let n6 = inputArray[numY+1][numX+1];
        let n7 = inputArray[numY][numX+1];
        let n8 = inputArray[numY-1][numX+1];

        console.log(`Neighbours of ${inputArray[numY][numX]} are: \n`);

        console.log("N1: " + n1);
        console.log("N2: " + n2);
        console.log("N3: " + n3);
        console.log("N4: " + n4);
        console.log("N5: " + n5);
        console.log("N6: " + n6);
        console.log("N7: " + n7);
        console.log("N8: " + n8);
  
      }else if(numY == 0){
        if(numX == 0){
          console.log(`Neighbours1 of ${inputArray[numY][numX]} are: \n`);

          let n5 = inputArray[numY+1][numX];
          let n6 = inputArray[numY+1][numX+1];
          let n7 = inputArray[numY][numX+1];

          isSymbol(n5);
          isSymbol(n6);
          isSymbol(n7);

        }else if(numX == element.length){
          console.log(`Neighbours2 of ${inputArray[numY][numX]} are: \n`);

          let n3 = inputArray[numY][numX-1];
          let n4 = inputArray[numY+1][numX-1];
          let n5 = inputArray[numY+1][numX];

          isSymbol(n3);
          isSymbol(n4);
          isSymbol(n5);
          
        }else{
          console.log(`Neighbours3 of ${inputArray[numY][numX]} are: \n`);
          let n3 = inputArray[numY][numX-1];
          let n4 = inputArray[numY+1][numX-1];
          let n5 = inputArray[numY+1][numX];
          let n6 = inputArray[numY+1][numX+1];
          let n7 = inputArray[numY][numX+1];

          isSymbol(n3);
          isSymbol(n4);
          isSymbol(n5);
          isSymbol(n6);
          isSymbol(n7);
        }
      }else{
        if(numX == element.length){
          console.log(`Neighbours1 of ${inputArray[numY][numX]} are: \n`);

          let n1 = inputArray[numY-1][numX];
          let n7 = inputArray[numY][numX+1];
          let n8 = inputArray[numY-1][numX+1];

          isSymbol(n1);
          isSymbol(n7);
          isSymbol(n8);

        }else if(numY == inputArray.length){
          console.log(`Neighbours2 of ${inputArray[numY][numX]} are: \n`);

          let n1 = inputArray[numY-1][numX];
          let n3 = inputArray[numY][numX-1];

          isSymbol(n1);
          isSymbol(n2);
          isSymbol(n3);
          
        }else{
          console.log(`Neighbours3 of ${inputArray[numY][numX]} are: \n`);
          let n3 = inputArray[numY][numX-1];
          let n7 = inputArray[numY][numX+1];
          let n2 = inputArray[numY-1][numX-1];
          let n1 = inputArray[numY-1][numX];
          let n8 = inputArray[numY-1][numX+1];

          isSymbol(n3);
          isSymbol(n7);
          isSymbol(n2);
          isSymbol(n1);
          isSymbol(n8);
        }
      }
      i++;
    }
  }

function isSymbol(x){

  console.log(x);
  console.log("Type " + typeof x);
}


/*
Find Number
Detect if valid
Add numbers
*/