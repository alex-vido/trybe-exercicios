# Exercicios do dia:

## Exercícios, agora, a prática
Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos os exercícios trabalham a lógica condicional (if/else e switch/case), os operadores aritméticos (+, -, *, /, %) e os operadores lógicos (>, <, &&, ||). Para que você consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo sobre o uso do VS Code.

1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

*Dica: Neste link você encontra mais detalhes sobre operadores matemáticos. 😉

De olho na dica 👀: Use o console.log() para exibir o que cada exercício pede.

2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

## Há um par entre nós
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

R$ 2.670,00 - salário com INSS já deduzido.
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.

De olho na dica 👀: Que tal identificar as alíquotas com variáveis de nomes explicativos?

## Para fixar 1
Vamos praticar o que aprendemos no vídeo? 💪 Abra o seu VS Code e faça os exercícios a seguir.

De olho na dica 👀: Com o plugin Code Runner que vimos no vídeo, você pode executar o seu código no VS Code com o atalho Ctrl + Alt + n. Aqui você encontra mais informações sobre o Code Runner e outras extensões úteis para o VS Code!

Crie uma variável chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma variável chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as variáveis que você criou.

## Para fixar 2

Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators, disponível neste link, se tiver dúvidas.

Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

Crie uma variável chamada base e atribua a ela o valor 5.
Crie uma variável chamada height e atribua a ela o valor 8.
Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela height. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma variável chamada perimeter e atribua a ela a soma de todos os lados do retângulo.


## Para fixar 3

Criar estruturas condicionais com operadores if/else e operadores lógicos será muito comum na sua carreira de pessoa desenvolvedora. Então, vamos praticar essa habilidade tão importante?

Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100.

Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere as seguintes informações:

Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo de pessoas aprovadas!”.
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera.”.
Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”.
Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam.

## Para fixar 4

Crie uma variável chamada “currentHour” que receba um número entre 4 e 24, conforme sua escolha, para representar as horas do dia.

Crie uma variável chamada “message” que inicialmente seja uma string vazia.

Implemente as seguintes condicionais:

Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.

Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.

Agora, imprima a variável message fora das suas condições

## Para fixar 5
Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

Utilizando if/else, implemente as seguintes condicionais:

Se a variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

Se a variável for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido! UwU!”.

## Para fixar 6
Crie uma variável para armazenar o status da pessoa candidata em um processo seletivo. As possibilidades são: 'aprovada', 'lista' ou 'reprovada'.
Crie uma estrutura condicional com o switch/case para imprimir as seguintes mensagens:
Caso 'aprovada', imprima “Parabéns, você está no grupo de pessoas aprovadas!”.
Caso 'lista', imprima “Você está na nossa lista de espera.”.
Caso 'reprovada', imprima “Infelizmente, você reprovou.”.
Caso default, imprima a mensagem “Informação incorreta.”.