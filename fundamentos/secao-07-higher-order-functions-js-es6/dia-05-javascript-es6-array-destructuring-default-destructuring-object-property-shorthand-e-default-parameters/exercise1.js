const myList = [5, 2, 3];

const [first, second, thrid] = myList;
const swap = (arr) => {
  const [first, second, thrid] = arr;
  return [thrid, second, first];
}

console.log(swap(myList));