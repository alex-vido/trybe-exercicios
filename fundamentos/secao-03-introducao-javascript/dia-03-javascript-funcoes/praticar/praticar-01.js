let clientesTrybeBank = ['Ada', 'John', 'Gus']; 

// escreva aqui sua função

function addClient(client) {
  if (typeof(client) === 'string') {
    clientesTrybeBank.push(client)
  } else {
    return
  }
  return clientesTrybeBank;
}

addClient('Alex');
addClient(3)

console.log(clientesTrybeBank);