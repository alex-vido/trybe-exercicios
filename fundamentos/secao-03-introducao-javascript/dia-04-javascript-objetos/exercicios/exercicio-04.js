const converteAlgarismosRomanos = (str) => {
  let n = 0;
  for (let i = 1; i <= str.length; i += 1) {
    const numerosRomanos = [
      { name: 'I', value: 1 }, { name: 'IV', value: 4 }, { name: 'V', value: 5 },
      { name: 'IX', value: 9 }, { name: 'X', value: 10 }, { name: 'XL', value: 40 },
      { name: 'L', value: 50 }, { name: 'XC', value: 90 }, { name: 'C', value: 100 
      }, { name: 'CD', value: 400 }, { name: 'D', value: 500 }, 
      { name: 'CM', value: 900 }, { name: 'M', value: 1000}
    ]
    if (Object.values(numerosRomanos[str[i - 1]]) < Object.values(numerosRomanos[str[i]])) {
      n += (Object.values(numerosRomanos[str[i - 1]]).value + Object.values(numerosRomanos[str[i]].value));
    }
  }
  return n
}

console.log(converteAlgarismosRomanos('IX'));


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

// Exercício 03

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

// Exercício 04

let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })