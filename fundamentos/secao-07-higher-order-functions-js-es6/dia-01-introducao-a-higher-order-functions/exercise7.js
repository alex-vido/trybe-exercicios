const books = require('./books');

const expectedResult = false;

const everyoneWasBornOnSecXX = (ar) => ar.every(({birthYear}) => birthYear >= 1900 && birthYear <= 1999);

console.log(everyoneWasBornOnSecXX(books));