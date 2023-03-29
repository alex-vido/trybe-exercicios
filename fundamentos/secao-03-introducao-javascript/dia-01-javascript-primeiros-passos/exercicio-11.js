let salarioBruto = 3000
let aliquotaInss;
let salarioMostrarInss;
let aliquotaIrPorcentagem;
let deduzirImposto;
let salarioMostrarIR;

// INSS
if (salarioBruto <= 1556.94) {
  aliquotaInss = 8;
  salarioMostrarInss = 'até R$ 1556.94';
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = 9;
  salarioMostrarInss = 'entre R$ 1556.95 até R$ 2594.92';
  
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = 11;
  salarioMostrarInss = 'entre R$ 2594.93 até R$ 5189.82';
} else {
  aliquotaInss = 570.88
  salarioMostrarInss = 'acima de R$ 5189.82';
}

const inss = salarioBruto / 100 * aliquotaInss;
const salarioBase = salarioBruto - inss;

console.log(`O salário bruto está ${salarioMostrarInss}, então a alíquota para o INSS é de ${aliquotaInss}%. O INSS será ${aliquotaInss}% de R$ ${salarioBruto}, ou seja, R$ ${inss}`);
console.log(`O salário é o salário bruto - inss. Nesse caso é, R$ ${salarioBase}`);
console.log();

if (salarioBase <= 1903.98) {
  salarioMostrarIR = 'até 1903.98';
  aliquotaIrPorcentagem = 0;
  deduzirImposto = 0;
} 
else if (salarioBase <= 2826.65) {
  salarioMostrarIR = 'entre R$ 1903.99 até R$ 2826.65';
  aliquotaIrPorcentagem = 7.5
  deduzirImposto = 142.8
  
} 
else if (salarioBase <= 3751.05) {
  salarioMostrarIR = 'entre R$ 2826.66 até R$ 3751.05';
  aliquotaIrPorcentagem = 15;
  deduzirImposto = 354.8;
} 
else if (salarioBase <= 4664.68) {
  salarioMostrarIR = 'entre R$ 3751.05 até 4664.68';
  aliquotaIrPorcentagem  = 22.5;
  deduzirImposto = 636.13;
} 
else {
  salarioMostrarIR = 'acima de R$ 4664.68';
  aliquotaIrPorcentagem = 27.5
  deduzirImposto = 869.36
}

const ir = salarioBase / 100 * aliquotaIrPorcentagem - deduzirImposto;
let salarioFinal = salarioBase - ir;

console.log(`O salário base está ${salarioMostrarIR}, então a alíquota para o IR é de ${aliquotaIrPorcentagem}% e a parcela a do imposto é de R$ ${deduzirImposto}. O IR será ${aliquotaIrPorcentagem}% de ${salarioBase} e com a parcela do imposto, o valor total a ser pago é de R$ ${ir}`);
console.log(`O salário final, após todos os descontos, ficou R$ ${salarioFinal}`);g