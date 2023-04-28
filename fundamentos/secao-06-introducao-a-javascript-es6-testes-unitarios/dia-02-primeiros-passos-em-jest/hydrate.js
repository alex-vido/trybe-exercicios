const hydrate = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (!isNaN(Number(str[i]))) {
      sum += Number(str[i]);
    }
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
};

module.exports = hydrate;
