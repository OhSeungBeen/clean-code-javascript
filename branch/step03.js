// Truthy, Falsy
// Truthy, Falsy를 활용하자.

// 참같은 값
if (true) {
}
if ({}) {
}
if ([]) {
}
if (42) {
}
if ('0') {
}
if ('false') {
}
if (new Date()) {
}
if (-42) {
}
if (12n) {
}
if (3.14) {
}
if (-3.14) {
}
if (Infinity) {
}
if (-Infinity) {
}

// 거짓같은 값
if (false) {
}
if (null) {
}
if (undefined) {
}
if (0) {
}
if (-0) {
}
if (0n) {
}
if (NaN) {
}
if ('') {
}

function printName(name) {
  // if (name === undefined || name === null) {
  //   return '이름 없음';
  // }
  // falsy에 null과 undefined가 포함되므로
  // 부정 조건을 이용 할 수 있다.
  if (!name) {
    return '이름 없음';
  }
}
