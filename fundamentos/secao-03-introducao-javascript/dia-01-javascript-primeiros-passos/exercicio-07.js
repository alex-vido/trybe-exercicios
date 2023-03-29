let nota = 'B';
nota = 'C';
nota = 'A';
nota = 'D';
nota = 'E';
nota = 'F';
nota = 'G';

switch (nota) {
  case 'A':
    console.log('100%');
    break;
  case 'B':
    console.log('80%');
    break;
  case 'C':
    console.log('60%');
    break;
  case 'D':
    console.log('40%');
    break;
  case 'E':
    console.log('20%');
    break;
  case 'F':
    console.log('0%');
    break;
  default:
    console.log('Nota inválida');
    break;
}