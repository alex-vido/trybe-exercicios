// nome, e-mail, telefone, GitHub e LinkedIn
let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, 'name', 'Alex')
addProperty(student, 'email', 'alex.vido93@gmail.com')
addProperty(student, 'telephone', '11990030975')
addProperty(student, 'github', 'https://github.com/alex-vido')
addProperty(student, 'linkedin', 'https://linkedin')
addProperty(student, 'name', 'Alex')
console.log(student);

let top3Albums = {
  1: 'Nightfall in Middle-Earth',
  2: 'Imaginations from the Other Side',
  3: 'Somewhere Far Beyond',
};

console.log(Object.entries(top3Albums));
