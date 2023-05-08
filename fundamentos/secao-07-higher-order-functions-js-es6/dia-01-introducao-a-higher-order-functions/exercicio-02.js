const sorter = (number) => {
  const loterySorter = Math.floor((Math.random() * 5) + 1);
  let isCorrect = number === loterySorter ? `${loterySorter} Parabéns, você ganhou` : `${loterySorter} Tente Novamente`;
  return isCorrect;
}

console.log(sorter(5));