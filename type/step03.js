// eqeq 줄이기

// eqeq ? 동등연산자
// ==(equality)
// eqeqeq ? 엄격한 동등 연산자
// ===(strict equality)

// 동등 연산자를 이용하면 형변환(type casting)이 일어난다.
// 어떠한 오류를 발생시킬지 모른다.
console.log('1' == 1); // true
console.log(1 == true); // true

// 엄격한 동등 연산자를 이용한다.
console.log('1' === 1); // false
console.log(1 === true); // false
// 타입변환을 수동으로 한다.
console.log(Number('1') === 1); // true
console.log(Boolean(1) === true); // true
