let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let number of numbers) {
  console.log(number);
}

console.log('--------------------------------------------------------------' );

for (let number of numbers) {
  sum += number
}
console.log(sum)

console.log('--------------------------------------------------------------' );

const mediaSum = sum / numbers.length;
console.log(mediaSum);

console.log('--------------------------------------------------------------' );

if (mediaSum > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

console.log('--------------------------------------------------------------' );

let maiorValor = 0;

for (let number of numbers) {
  if (number > maiorValor) {
    maiorValor = number
  }
}

console.log(maiorValor)

console.log('--------------------------------------------------------------' );

sum = 0

for (let number of numbers) {
  if (number % 2 === 1) {
    sum += 1;
  }
}

if (sum > 0) {
  console.log(sum);
} else {
  console.log('Nenhum valor ímpar encontrado');
}

console.log('--------------------------------------------------------------' );

let menorValor = numbers[0];

for (let number of numbers) {
  if (menorValor > number) {
    menorValor = number;
  }
}

console.log(menorValor);

console.log('--------------------------------------------------------------' );

let num1Ao25 = [];

for (let i = 0; i < 26; i += 1) {
  num1Ao25.push(i)
}
console.log(num1Ao25);

console.log('--------------------------------------------------------------' );

for (number of num1Ao25) {
  console.log(number / 2);
}