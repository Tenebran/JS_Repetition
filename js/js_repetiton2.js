let students = [
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Alex', age: 21, isMarried: true, scores: 89 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'John', age: 20, isMarried: false, scores: 100 },
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

const funcNames = x => x.name;
const funcScores = X => X.scores;
const funcStudent = x => ({ ...x, isStudents: true });

const globalM = (array, func) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    result[index] = func(array[index]);
  }

  return result;
};

console.log(globalM(students, funcNames));
console.log(students.map(funcNames));

const globalF = (array, func) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (func(array[index]) === true) {
      result.push(array[index]);
      console.log(array[index]);
    }
  }

  return result;
};

console.log(
  'HELLO GLOBAL F',
  globalF(students, s => s.age > 20)
);

console.log(students.filter(s => s.age > 20));

const globalFind = (array, func) => {
  for (let index = 0; index < array.length; index++) {
    if (func(array[index]) === true) {
      return array[index];
    }
  }
};

console.log(globalFind(students, x => x.age === 20));
console.log(students.find(x => x.age === 20));

const globalP = (array, el) => {
  array[array.length] = el;
  return array.length;
};

console.log(globalP(students, { hey: 'YOOO!!!!!' }));
console.log(students);

const numb = [1, 2, 3, 4, 5];

const globalIO = (array, num) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === num) {
      return index;
    }
  }
  return -1;
};

console.log(globalIO(numb, 2));
console.log(globalIO(numb, 6));
console.log(numb.indexOf(2));
console.log(numb.indexOf(6));
