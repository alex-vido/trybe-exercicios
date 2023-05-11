
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userWithJobInfos = { ...user, ...jobInfos}
console.log(userWithJobInfos);

const separatedUser = { name, age, nationality, profession, squad, squadInitials } = user;
const separatedJobInfo = { profession, squad, squadInitials } = jobInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squal is ${squadInitials}-${squad}`);