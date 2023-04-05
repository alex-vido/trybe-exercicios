// Exercício 02

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (vector) => {
  let newVector = [];
  for (arr of vector) {
    for(number of arr) {
    if(number % 2 === 0) {
      newVector.push(number)
      }
    }
  }
  return newVector;
}

console.log(arrayOfNumbers(vector));

//Exercício 03

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const repeteCounter = (arr) => {
  let basketObject = {}
  for (value of arr) {
    if(typeof basketObject[value] === 'undefined') {
      basketObject[value] = 1;
      }
    basketObject[value] += 1;
  }
  return basketObject;
}

const repeteMoreTimes = (func) => {
  let moreTimes = '';
  let count = 0;
  for (value in func) {
    let name = value;
    if (func[value] > count) {
      moreTimes = name;
      count = func[value];
    }
  
  }
  return moreTimes;
}



console.log(repeteMoreTimes(repeteCounter(basket)));
