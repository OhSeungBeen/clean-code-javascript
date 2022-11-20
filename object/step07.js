// hasOwnProperty

const Person = {
  name: 'seungbeenoh',
};

console.log(Person.hasOwnProperty('name')); // true
console.log(Person.hasOwnProperty('age')); // false

const foo = {
  hasOwnProperty: function () {
    return 'hasOwnProperty';
  },
  bar: 'string',
};

foo.hasOwnProperty('bar'); // true
// 안전한 방법
Object.prototype.hasOwnProperty.call(foo, 'bar'); // false

function hasOwnProp(tagetObj, tagetProp) {
  return Object.prototype.hasOwnProperty.call(tagetObj, tagetProp);
}
