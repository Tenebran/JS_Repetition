const todolistID_1 = '63jg-87ks';
const todolistID_2 = '96jk-01re';

const todoList = [
  {
    id: todolistID_1,
    title: 'What to learn',
    filter: 'all',
  },

  {
    id: todolistID_2,
    title: 'What to buy',
    filter: 'all',
  },
];

const tasks = {
  [todolistID_1]: [
    {
      id: 11,
      title: 'HTML',
      isDone: true,
    },
    {
      id: 12,
      title: 'CSS',
      isDone: true,
    },
    {
      id: 13,
      title: 'JS/TS',
      isDone: true,
    },
  ],
  [todolistID_2]: [
    {
      id: 21,
      title: 'Milk',
      isDone: true,
    },
    {
      id: 22,
      title: 'Meat',
      isDone: true,
    },
    {
      id: 23,
      title: 'Beer',
      isDone: true,
    },
  ],
};
console.log(tasks[todolistID_1]);
console.log(tasks[todoList[0].id]);
console.log(tasks[todolistID_1].find(t => t.title === 'HTML'));
console.log(tasks[todolistID_1].map(t => ({ ...t, isDone: false })));

console.log(tasks[todolistID_2].map(t => (t.id === 22 ? { ...t, title: 'Pork' } : t)));
console.log(tasks);
console.log(todoList.map(todo => tasks[todo.id].map(t => ({ ...t, isDone: false }))));

// reduce

const nums = [1, 2, 3, 4, 5];
let students = [
  { name: 'Bob', age: 22, isMarried: true, scores: 85 },
  { name: 'Alex', age: 21, isMarried: true, scores: 89 },
  { name: 'Nick', age: 20, isMarried: false, scores: 120 },
  { name: 'John', age: 20, isMarried: false, scores: 100 },
];
console.log(nums.reduce((acc, el) => acc + el, 0));
console.log(
  students.reduce((acc, el) => {
    if (el.age > 20) {
      acc.push(el.name);
      return acc;
    }
    return acc;
  }, [])
);

console.log(students.filter(s => s.age > 20).map(s => s.name));

console.log(
  students.reduce((acc, el) => {
    if (acc.scores < el.scores) {
      acc = el;
      return acc;
    }
    return acc;
  })
);
