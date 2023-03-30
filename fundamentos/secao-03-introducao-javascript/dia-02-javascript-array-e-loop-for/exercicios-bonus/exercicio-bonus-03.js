let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 1; index < numbers.length + 1; index+=1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] !== undefined) {
    newArray[index - 1] = (numbers[index] * numbers[secondIndex]);
    }
    else {
       newArray[index - 1] = numbers[secondIndex] * 2
    }
  }
}

console.log(newArray);