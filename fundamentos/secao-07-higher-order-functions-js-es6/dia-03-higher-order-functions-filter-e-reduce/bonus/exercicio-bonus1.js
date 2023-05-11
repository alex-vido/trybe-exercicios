const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (ar) => ar.reduce((acc, curr) => [acc + curr]);

console.log(flatten(arrays));