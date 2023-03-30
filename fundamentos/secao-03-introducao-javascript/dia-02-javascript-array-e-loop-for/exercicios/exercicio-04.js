let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let word of array) {
  if (maiorPalavra.length < word.length) {
    maiorPalavra = word;
  }

   if (menorPalavra.length > word.length) {
    menorPalavra = word;
   }
}

console.log(maiorPalavra);
console.log(menorPalavra);