const books = require('./books');

const expectedResult = true;

const someBookWasReleaseOnThe80s = (ar) => ar.some(({ releaseYear }) => releaseYear >= 1980 && releaseYear <= 1989);

console.log(someBookWasReleaseOnThe80s(books));