const studentRegister = (name, age) => {
  // seu código aqui
  try {
    if (!name || !age) {
      throw new Error('Todas as informações são necessárias');
    } else if (age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }
    return 'Nome, seja bem-vindo(a) à AuTrybe!'
  } catch (e) {
    return e.message;
  }
}
console.log(studentRegister('Alex'));
console.log(studentRegister('Alex', 17));
console.log(studentRegister('Alex', 18));