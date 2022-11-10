// JavaScript의 배열은 객체다.

const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {};
arr['{}'] = [1, 2, 3];
arr['func'] = function () {
  return 'hello';
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 1
// 2
// 3

console.log(arr);
// [
//   1,
//   2,
//   3,
//   'test',
//   property: 'string value',
//   obj: {},
//   '[object Object]': [ 1, 2, 3 ],
//   func: [Function (anonymous)]
// ]

const obj = {
  arr: [1, 2, 3],
  3: 'test',
  property: 'string value',
  obj: {},
  '{}': [1, 2, 3],
  func: function () {
    return 'hello';
  },
};

console.log(obj);
// {
//   '3': 'test',
//   arr: [ 1, 2, 3 ],
//   property: 'string value',
//   obj: {},
//   '{}': [ 1, 2, 3 ],
//   func: [Function: func]
// }

// 자바스크립트의 배열은 객체와 많이 유사하고 객체처럼 취급될 수 있기때문에 주의해야한다.
if (typeof arr === 'object') {
  console.log('배열'); // 실행
}
if (arr.length) {
  console.log('배열'); // 실행
}

// arr.length로 확인하는것은 문자열.length도 있기때문에 적절하지 않다.

// Array.isArray를 활용한다.
Array.isArray(arr); // ture
