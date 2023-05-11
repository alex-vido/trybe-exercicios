const books = require('./books');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = (ar) => ar.reduce((acc, curr) => acc > curr.name ? acc : curr, '')

console.log(longestNamedBook(books));