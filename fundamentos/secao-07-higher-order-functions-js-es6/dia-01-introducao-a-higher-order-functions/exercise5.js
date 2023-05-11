const books = require('./books');

const expectedResult = 'Duna';
const smallerName = (books) => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach(book => {
    if (typeof nameBook === 'unfedined') {
      nameBook = book.name;
    }
    if(nameBook > book.name) {
      nameBook = book.name;
    }
    nameBook
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));