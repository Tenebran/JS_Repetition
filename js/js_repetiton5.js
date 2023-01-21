const string = ['Alex', 'Donald', 'Bob'];

console.log(string.sort());

const string1 = ['Alex', 'Donald', 'Bob', 100];

console.log(string1.sort());

const string2 = ['Alex', 'alex', 'Donald', 'Bob', 100, 'Юрий'];

console.log(string2.sort());

//1. сортирует строки "из коробки", т.е. без доп. параметров
//2. сортирует строки типа по "алфавиту" (unicode)
//3. работает мутабельно (сортирует на месте)
//4. возвращает ссылку на исходный массив

// console.log(string.sort() === string);

const numbers = [1000, 250, 99, 8, 801];

console.log(numbers.sort());

// const compareFunc = (a, b) => {
//   //   if (a <= b) {
//   //     return -1;
//   //   } else {
//   //     return 100;
//   //   }

//   if (a > b) {
//     return 10;
//   } else {
//     return -100;
//   }
// };

// console.log(numbers.sort(compareFunc));

// const shortComparefunc = (a, b) => a - b;

console.log(numbers.sort((a, b) => a - b));

//6. Вместе с sort часто испольуеться revers
//7. Сортировка массива обьекта
let students = [
  { name: 'Bob', age: 22, isMarried: true, scores: 95 },
  { name: 'Alex', age: 21, isMarried: true, scores: 89 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'John', age: 19, isMarried: false, scores: 121 },
  { name: 'alex', age: 22, isMarried: true, scores: 89 },
  { name: 'Helge', age: 22, isMarried: true, scores: 90 },
];

console.log(students.sort((a, b) => a.age - b.age));
console.log(
  students.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  })
);

console.log(students.sort((a, b) => a.name.localeCompare(b.name)));

// Вложенная сортировка (по возрасту и потом по успеваемости)

console.log(
  students.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    } else if (a.age > b.age) {
      return 1;
    } else {
      if (a.scores >= b.scores) {
        return -1;
      } else {
        return 1;
      }
    }
  })
);

const nums = [23, 56, 34, 1, 67, 12, 3]; // по возврастанию

for (let j = 0; j < nums.length - 1; j++) {
  for (let index = 0; index < nums.length - 1 - j; index++) {
    if (nums[index] > nums[index + 1]) {
      const temp = nums[index];
      nums[index] = nums[index + 1];
      nums[index + 1] = temp;
    }
  }
}
//O(n2 - 2n)
console.log(nums);
