const books = require('./books');

const expectedResult = 43;

const averageAge = (ar) => ar.reduce((acc, cur) => Math.round(acc + (cur.releaseYear - cur.author.birthYear) / books.length), 0)

console.log(averageAge(books));