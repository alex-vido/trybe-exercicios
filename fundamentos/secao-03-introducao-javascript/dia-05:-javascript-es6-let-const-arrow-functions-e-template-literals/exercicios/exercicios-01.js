console.log('-----------Exercicio 01-----------');

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

console.log('-----------Exercicio 02-----------');

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}

pessoa.nome = 'Luna'
pessoa.idade = 19
// } // Altere essa estrutura para corrigir o erro.
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

console.log('-----------Exercicio 03-----------');

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

console.log('-----------Exercicio 04-----------');

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

console.log('-----------Exercicio 05-----------');

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

console.log('-----------Exercicio 06-----------');

const hello = (nome) => `Olá, ${nome}!`
let nome1 = 'Ivan';
console.log(hello(nome1));

console.log('-----------Exercicio 07-----------');

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome2 = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome2, sobrenome));

console.log('-----------Exercicio 08-----------');

let speed = 90;
const speedCar = (speed) => {
  let velocity = (speed >= 120
      ? `Você ultrapassou o limite de velocidade`
      : `Você está na velocidade permitida`
  )
  return velocity;
};
console.log(speedCar(speed));