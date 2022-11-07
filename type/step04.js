// 형 변환 주의하기

// 암묵적 형 변환
console.log('1' == 1); // true
console.log(11 + '문자와 결합'); // 11문자와 결합
console.log(!!'문자열'); // true
console.log(!!''); // false
console.log(parseInt('9.9999', 10)); // 9

// 다양한 형변환 레퍼객체를 이용해서 명시적으로 변환하자
console.log(String(11 + '문자와 결합'));
