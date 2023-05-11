const books = require('./books');

const expectedResult = 'Duna';

const smallerName = (ar) => {
  let nameBook;
  // escreva aqui o seu código
  ar.forEach((book) => {
    if (typeof nameBook === 'undefined') {
      nameBook = book.name;
    }
    else {
      if (nameBook.length > book.name.length) {
      nameBook = book.name;
      }
    }
  })
  