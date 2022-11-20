// obeject destructuring

// 예시 1
// function Person(name, age, location) {
//   this.name = name;
//   this.age = age;
//   this.location = location;
// }
// const seungbeen = new Person('seungbeen', 31, 'korea');

function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const seungbeen = new Person({ name: 'seungbeen', age: 31, location: 'korea' });

function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const seungbeen = new Person('seungbeen', { age: 31, location: 'korea' });

// 예시2
const orders = ['fisrt', 'second', 'third'];

// const fisrt = orders[0];
// const second = orders[2];
// const [first, , second] = orders;
const { 0: fisrt, 2: second } = orders;
