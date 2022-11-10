// Array.length

// 문제 1
const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10;

console.log(arr.length); // 10
console.log(arr); // [1, 2, 3, , , , , , , ,]

// 문제 2
const arr2 = [1, 2, 3];

arr2[3] = 4;

console.log(arr2.length); // 4

arr[9] = 10;

console.log(arr2.length); // 10

// 문제 3
const arr3 = [1, 2, 3];
arr3.length = 0;
console.log(arr3); // []

// 배열의 length를 사용하는것을 주의해야한다.
