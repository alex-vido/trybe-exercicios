let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

console.log('------------------------------------');

info.recorrente = 'sim'

console.log(info);

console.log('------------------------------------');

for (key in info) {
  console.log(key);
}

console.log('------------------------------------');

for (key in info) {
  console.log((info[key]));
}

console.log('------------------------------------');

let info2 = Object.assign({}, info)
console.log(info2);

info2.personagem += ' e Tio Patinhas';
info2.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
info2.nota += ' e O último MacPatinhas'
info2.recorrente = 'Ambos recorrentes'

console.log(info2);
