let students = [
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Alex', age: 21, isMarried: true, scores: 89 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'John', age: 19, isMarried: false, scores: 100 },
];

// const names = ['Bob', 'Alex', 'Nick', 'John'];

const getNames = array => {
  const result = [];
  array.map(s => result.push(s.name));
  //   for (let index = 0; index < array.length; index++) {
  //     result[index] = students[index].name;
  //   }

  return result;
};

const name = getNames(students);

// const scores [85, 89, 120, 100]

const getScores = array => {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    result[index] = students[index].scores;
  }

  return result;
};

const getInfo = (array, info) => {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (info === 'scores') {
      result[index] = students[index].scores;
    } else if (info === 'name') {
      result[index] = students[index].name;
    } else if (info === 'age') {
      result[index] = students[index].age;
    } else if (info === 'isMarried') {
      result[index] = students[index].isMarried;
    }
  }

  return result;
};

console.log('test', getInfo(students, 'isMarried'));
const gerStudents = array => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    result[index] = { ...array[index], isStudents: true };
  }

  return result;
};

console.log(gerStudents(students));
