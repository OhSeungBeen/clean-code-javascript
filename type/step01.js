// 타입 검사
// 자바스크립트 언어는 동적인 타입을 가지는 언어이기때문에 타입검사가 어려우므로 잘 찾아서 맞는 방법으로 검사한다.

// typeof 피연산자를 평가해서 문자열로 반환된다.

typeof '문자열';
typeof undefined;
typeof 123;
typeof Symbol();

// primitive vs reference
// primitive 불변, 레퍼런스 object, array, function 등등
// primitive는 typeof로 판별 할 수있지만 레퍼런스는 typeof로 판별하기 쉽지않다.

function myFunction() {}
class MyClass {}
const str = new String('string');

console.log(typeof myFunction); // function
console.log(typeof MyClass); // function
console.log(typeof str); // object
console.log(typeof null); // object

// instanceof
// 객체에 대해 사용하기에 유용하지만

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: 'seungbeenoh',
  age: 31,
};

const seungbeenoh = new Person('seungbeenoh', 31);

console.log(seungbeenoh instanceof Person);
console.log(p instanceof Person);

const arr = [];
const func = function () {};
const date = new Date();

console.log(arr instanceof Array); // true
console.log(func instanceof Object); // true
console.log(date instanceof Date); // true

// Object 프로토타입 체인을 타기때문에 전부 true
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(date instanceof Object); // true

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(func)); // [object Function]
console.log(Object.prototype.toString.call(date)); // [object Date]
