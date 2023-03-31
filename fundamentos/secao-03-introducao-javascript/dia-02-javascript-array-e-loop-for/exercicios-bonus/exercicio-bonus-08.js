let n = 7
let middle = (n + 1) / 2; // 3
let left = middle;
let right = middle;

for (let index = 1; index <= middle; index += 1) {
  let draw = '';
  for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
    if (secondIndex == left || secondIndex == right || index == middle) { // Se 2index for maior que 3 e
      draw += '*';
    } else {
      draw += ' ';
    }
  }
  
  right += 1;
  left -= 1;
  console.log(draw);
}
