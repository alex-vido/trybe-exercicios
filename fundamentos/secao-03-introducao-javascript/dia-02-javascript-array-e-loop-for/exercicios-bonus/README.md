# Exercícios - Bônus - Ordenação Bubble Sort

Para realizar os próximos dois exercícios, leia este artigo e tente entender o que está acontecendo no código abaixo:

``
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
``

Com base na leitura do artigo, faça os exercícios a seguir.

Ordene o array numbers em ordem crescente e imprima seus valores.

``
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
``

Ordene o array numbers em ordem decrescente e imprima seus valores.

``
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
``

Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

``
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
``

``
// resultado esperado:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
``

Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
Copiar
n = 5


``
*****
*****
*****
*****
*****
``
Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

``
*
**
***
****
*****
``

Agora, inverta o lado do triângulo. Por exemplo:

``
n = 5

    *
   **
  ***
 ****
*****
``

Depois, faça uma pirâmide com n asteriscos de base. Por exemplo:

``
n = 5

  *
 ***
*****
``

Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar. Por exemplo:

``
n = 7

   *   
  * *  
 *   * 
*******
``

Faça um algoritmo que indique se um número definido em uma variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

