const sorter = (number) => {
  const loterySorter = Math.round(Math.random() * 5);
  let isCorrect = number === loterySorter ? `${loterySorter} Parabéns, você ganhou` : `${loterySorter} Tente Novamente`;
  return isCorrect;
}

console.log(sorter(5));