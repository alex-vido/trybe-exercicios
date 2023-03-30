let clientesTrybeBank = ['Ada', 'John', 'Gus']; 

// escreva aqui sua função

function deleteClient(client) {
  let indexOfClient = clientesTrybeBank.indexOf(client)
  if (indexOfClient > -1) {
    clientesTrybeBank.splice(indexOfClient, 1)
  }
  else {
    return `${client} não consta na lista de clientes.`;
  }
  return clientesTrybeBank;
}

console.log(deleteClient('John'));
console.log(deleteClient('José'));

console.log(clientesTrybeBank);
