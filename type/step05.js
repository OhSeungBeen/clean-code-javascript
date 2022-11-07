// isNaN
// is Not A Number 숫자가 아니다.

// 느슨한 검사
console.log(isNaN(123)); // false
console.log(isNaN(123 + '테스트')); // true

// ES2015+
// 엄격한 검사
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(123 + '테스트')); // false
