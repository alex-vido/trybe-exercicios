const techList = (arr, name) => {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  let arrTech = [];
  arr = arr.sort();
  for (let i = 0; i < arr.length; i += 1) {
    arrTech.push({tech: arr[i], name: name});
  }
  return arrTech;
}

module.exports = techList;