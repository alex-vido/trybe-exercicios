const books = require('./books');

const expectedResult = 'Stephen King';
const authorBornIn1947 = (ar) => ar.find(book => book.author.birthYear === 1947).author.name;

console.log(authorBornIn1947(books));