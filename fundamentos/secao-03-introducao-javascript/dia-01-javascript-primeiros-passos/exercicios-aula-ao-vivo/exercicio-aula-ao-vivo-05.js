/* Você foi jantar em um restaurante chique, em uma cidade turística. O prato que você pediu custou R$100,00. Porém o restaurante possui uma taxa de 10% sobre o valor da conta por ser um lugar turístico.
Crie uma solução para calcular o valor final da conta sendo que você também quis dar 5% de gorjeta para a pessoa que lhe atendeu. */

const conta = 100
const tx = conta / 100 * 10
const gor = conta / 100 * 5

const total = conta + tx + gor
console.log(total)

