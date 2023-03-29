let custo = 50;
let venda = 100;
custo = 112;
venda = 112;

const soma = ((venda * 1000) - (custo * 1000))

if (soma > 0) {
  console.log(`Lucro de R$${soma}`);
} else if (soma === 0) {
  console.log('Não houve lucro nem prejuízo');
} 

else {
  console.log(`Prejuízo de R$${soma}`);
}