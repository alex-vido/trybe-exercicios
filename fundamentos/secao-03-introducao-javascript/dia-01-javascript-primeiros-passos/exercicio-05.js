// Um triangulo é válido se a soma dos 3 angulos forem igual a 180

let ladoA = 60;
let ladoB = 40;
let ladoC = 80;
let ehTriangulo;

ladoA = 100;
ladoB = 0;
ladoC = 80;

ladoA = 60;
ladoB = 40;
ladoC = 90;

if (ladoA + ladoB + ladoC === 180 && ladoA != 0 && ladoB != 0 && ladoC != 0) {
  return true;
}

else {
  console.log("Não é um triângulo válido");
  return false;
}