// number, string, boolean, null, undefined, NaN,
// object, array, function

// Литерал обьекта
const user1 = {
  name: 'Bob',
  age: 25,
  isStudent: true,
};

const address = {
  country: 'Sudan',
  city: 'Hartum',
};

const user2 = user1;

const num1 = 10;
let num2 = num1;
num2 = 'hey';

console.log(num2);
console.log(num1);

user2.name = 'Anne';
console.log(user1);

// делаем копию = вносим изменения в копию = используем копию с изменениями

const userCopy = {};
userCopy.age = user1.age;
userCopy.isStudent = user1.isStudent;
userCopy.name = 'Bob';
console.log(user1);
console.log(userCopy);

const country = 'Benin';

const userCopy2 = { ...user1, isMarried: undefined }; // !!!!!!!!!!!!!!! spred !!!!! добавление нового свойства
const userCopy3 = { ...userCopy2, isMarried: false }; // изменения существующего свойства
const userCopy4 = { ...userCopy2, isMarried: false, ...address }; // слияние двух обьектов
const userCopy5 = { ...userCopy2, isMarried: false, country }; // имя свойства совпадает с именем переменной
console.log(userCopy2);
console.log(userCopy3);
console.log(userCopy4);

// deep copy
const user = {
  id: 1,
  name: 'Bob',
  age: 25,
  isStudent: true,
};

const userAddresses = [
  {
    userId: 1,
    country: 'Sudan',
    city: 'Hartum', // => Minsk
  },
  {
    userId: 2,
    country: 'Benin',
    city: 'Porto-Novo', // => Minsk
  },
];

const deepCopyUser = { ...user, address: { ...user.address } };

deepCopyUser.address.city = 'Minks';

console.log(user);
console.log(deepCopyUser);

const getAddress = userAddresses.find(c => c.userId === user.id);

console.log('address', getAddress.city);

const users = [
  {
    id: 1,
    name: 'Bob',
    age: 25,
    isStudent: true,
    address: { country: 'Sudan', city: 'Hartum' },
  },
  {
    id: 2,
    name: 'Bob',
    age: 25,
    isStudent: true,
    address: { country: 'Sudan', city: 'Hartum' },
  },

  {
    id: 3,
    name: 'Bob',
    age: 25,
    isStudent: true,
    address: { country: 'Sudan', city: 'Hartum' },
  },

  {
    id: 4,
    name: 'Bob',
    age: 25,
    isStudent: true,
    address: { country: 'Sudan', city: 'Hartum' },
  },
];

const users2 = [
  ...users,
  {
    id: 5,
    name: 'donald',
    age: 25,
    isStudent: true,
    address: { country: 'Sudan', city: 'Hartum' },
  },
];

console.log(users2);

console.log('HELLO');

const users3 = users2.map(user =>
  user.id === 5 ? { ...user, name: 'Tramp', address: { ...user.address, country: 'USA' } } : users
);

console.log('USERS3', users3);
