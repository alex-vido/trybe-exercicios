const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPairs = (acc, curr) => curr % 2 === 0 ? acc + curr : acc;

const sum = numbers.reduce(sumPairs, 0);

console.log(sum);