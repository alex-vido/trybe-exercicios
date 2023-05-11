const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (ar) => ar.reduce((ac, curr) => ac + curr.author.name + ', ', '').slice(0, -2) + '.';

console.log(reduceNames(books));