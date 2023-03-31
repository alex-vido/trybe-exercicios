let n = 5
let draw = '';
let middle = (n + 1) / 2; // 3
let left = middle;
let right = middle;

for (let index = 0; index <= middle; index += 1) {
  for (let secondIndex = 0; secondIndex <= n; secondIndex += 1) {
    if (secondIndex > left && secondIndex < right) { // Se 2index for maior que 3 e
      draw += '*';
    } else {
      draw += ' ';
    }
  }
  
  draw+= '\n'
  right += 1;
  left -= 1;
}

console.log(draw);
