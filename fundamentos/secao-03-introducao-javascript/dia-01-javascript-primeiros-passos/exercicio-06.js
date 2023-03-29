// Informações sobre peças e movimento das peças de xadrez, foram retiradas do site: https://brasilescola.uol.com.br/educacao-fisica/xadrez.htm#:~:text=As%20pe%C3%A7as%20s%C3%A3o%20compostas%20de,movimentar%2Dse%20sobre%20o%20tabuleiro.

let pecaXadrez = 'peão'

switch (pecaXadrez) {
  case 'peão':
    console.log('Ao peão, são apenas permitidos movimentos frontais.');
    console.log('De modo que o primeiro movimento de cada peão pode abranger duas casas, os outros movimentos se restringem a uma casa à frente.');
    console.log('ataque do peão sempre ocorre na diagonal');
    break;
  case 'torre':
    console.log('A torre pode correr, sem restrições de número de casas, para frente/trás/direita/esquerda.');
    break;
  case 'cavalo':
    console.log('O cavalo realiza movimentos em “L” (duas casas em um sentido e uma casa em sentido perpendicular àquele), para qualquer direção.');
    break;
  case 'bispo':
    console.log('O movimento do bispo ocorre, assim como no caso das torres, sem limitação de casas, porém apenas no sentido diagonal.');
    break;
  case 'rainha':
    console.log('A rainha tem livre movimentação no jogo.');
    break;
  case 'rei':
    console.log('O rei pode apenas ser movimentado de casa em casa, ainda que em qualquer direção do tabuleiro.');
    break;
  default:
    console.log('Peça inválida');
    break;
}