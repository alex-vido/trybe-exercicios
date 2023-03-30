let n = 5
let desenho = '';

for (let index = 1; index <= n; index += 1) {
  desenho = desenho+'\n';
  for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
    desenho = desenho+'*'
  }
}

console.log(desenho);