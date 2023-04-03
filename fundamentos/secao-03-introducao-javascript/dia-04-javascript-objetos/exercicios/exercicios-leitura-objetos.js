let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
let livroFavorito1 = 

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ‘${leitor.livrosFavoritos[0].titulo}’`);

let livroFavorito2 = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(livroFavorito2);
console.log(leitor);