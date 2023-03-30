let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  let localiza = localizaCliente(cliente);
  let valida = validaCliente(cliente);

  if (valida !== true) {
    return 'O parâmetro passado deve ser do tipo "string"!'
  }
  else if (localiza === false) {
    return 'Cliente não encontrado'
  }

  else {
    let index = localiza;
      clientesTrybeBank.splice(index, 1);
      return 'Cliente excluída(o) com sucesso.';
    }
} 

function validaCliente(cliente) {
  if (typeof cliente === 'string') {
    return true;
  } else {
    return false
    ;
  }
}

function localizaCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

console.log(removeCliente('John'));
console.log(removeCliente('Alex'));
console.log(removeCliente(3));
console.log(clientesTrybeBank);