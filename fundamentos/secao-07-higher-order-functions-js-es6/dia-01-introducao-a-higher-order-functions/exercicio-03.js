const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notes = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (studentAnswers[i] === 'N.A') {
    } else if (studentAnswers[i] !== rightAnswers) {
      counter -= 0.5;
    } else {
      counter += 1;
    }
  }
}
