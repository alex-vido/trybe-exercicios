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

function addKey(object, key, value) {
  return object[key] = value;
};

addKey(lesson2, 'turno', 'noite');

function showKey(object) {
  return Object.keys(object)
}

function objectLenght(object) {
  return Object.keys(object).length;
}

function showValues(object) {
  return Object.values(object)
}

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

function sumStundents(lessons) {
  let sum = 0;
  for (let lesson in lessons) {
    sum += lessons[lesson].numeroEstudantes;
  }
  return sum;
}

function getValueByNumber(lessons, key) {
  let arrValues = Object.values(lessons);
  return arrValues[key]
}

function verifyPair(lessons, key, value) {
  for (let chave in lessons) {
    if (chave === key) {
        if (lessons[chave] === value) {
        return true
        }
      }
    }
  return false;
}

console.log('--------Exercicio 1----------');
console.log(lesson2);
console.log('--------Exercicio 2----------');
console.log(showKey(lesson1));
console.log('--------Exercicio 3----------');
console.log(objectLenght(lesson3));
console.log('--------Exercicio 4----------');
console.log(showValues(lesson1));
console.log('--------Exercicio 5----------');
console.log(allLessons);
console.log('--------Exercicio 6----------');
console.log(sumStundents(allLessons));
console.log('--------Exercicio7----------');
console.log(getValueByNumber(lesson1, 0));
console.log('--------Exercicio 8----------');
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

