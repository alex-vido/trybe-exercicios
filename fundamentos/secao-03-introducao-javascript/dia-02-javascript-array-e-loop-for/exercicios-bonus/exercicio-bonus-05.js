let n = 5
let desenho = '';

for (let index = 1; index <= n; index += 1) {
  desenho += '\n';
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    desenho += '*'
  }
}

console.log(desenho);