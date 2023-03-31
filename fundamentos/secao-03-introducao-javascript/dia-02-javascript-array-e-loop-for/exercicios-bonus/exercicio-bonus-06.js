let n = 5
let desenho = '';

for (let index = 0; index < n; index += 1) {
  desenho += '\n';
  for (let secondIndex = 5; secondIndex >= 0; secondIndex -= 1) {
    if (secondIndex > index) {
      desenho += ' '
    }
    else if (secondIndex <= index) {
    desenho += '*'
    }
  }
}

console.log(desenho);