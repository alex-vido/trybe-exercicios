let word = 'tryber';
let wordReverse = ''
for (let i = 0; i < word.length; i+=1) {
  wordReverse += word[word.length - i - 1];
}

console.log(wordReverse);