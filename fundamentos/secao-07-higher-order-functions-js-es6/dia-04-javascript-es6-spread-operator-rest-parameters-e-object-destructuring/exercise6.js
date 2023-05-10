
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const { winter, spring, summer, autumn } = yearSeasons;
const months = [winter[1], winter[2], ...spring, ...summer, ...autumn, winter[0]];
console.log(months);