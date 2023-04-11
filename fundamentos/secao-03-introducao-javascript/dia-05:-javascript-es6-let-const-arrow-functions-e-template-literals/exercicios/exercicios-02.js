const substituaX = (name) => {
  const frase = 'Tryber x aqui!'.split(' ');
  frase[1] = name;
  return frase.join(' ');
}

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let concat = `
${func}
Minhas três principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}
`
  return concat;
}

console.log(minhasSkills(substituaX('Alex')));