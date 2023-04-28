const checkNumbers = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('É necessário que seja digitado 4 valores e que eles sejam números');
  }
}

const mediaNotas = (n1, n2, n3, n4) => {
  try {
    checkNumbers(n1, n2, n3, n4);
    return (n1 + n2 + n3 + n4) / 4;
  }
  catch(err) {
    console.log(err.message);
  }
}

mediaNotas(3, 4, 6, '7');