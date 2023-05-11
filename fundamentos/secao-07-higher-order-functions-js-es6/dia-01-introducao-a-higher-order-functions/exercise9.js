const books = require('./books');

const expectedResult = false;

const authorUnique = (ar) => ar.forEach(({ birthYear }) => birthYear.find(()))

console.log(authorUnique(books));