n1 = 2;
n2 = 4;
n3 = 6;
let bool;

n2 = 5;

if (
  n1 % 2 === 1 ||
  n2 % 2 === 1 ||
  n3 % 2 === 1
  ) {
    bool = true;
  }
  else {
    bool = false;
  }

  console.log(bool);