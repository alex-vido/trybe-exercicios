const RIGHT_ANSWERS =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notes = (rightAnswers) => rightAnswers.reduce((acc, curr, index) => 
  STUDENT_ANSWERS[index] === curr ? acc + 1
  : STUDENT_ANSWERS[index] === 'N.A' ? acc 
  : acc - 0.5, 0);

console.log(notes(RIGHT_ANSWERS));
