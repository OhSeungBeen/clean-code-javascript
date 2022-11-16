// Default Case 고려하기

// Default Case를 고려해서 사용자의 실수를 예방하자

// 예시1
function sum(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum()); // 0

// 예시2
function registerDay(userInputDay) {
  switch (userInputDay) {
    case '월요일':
    case '화요일':
    case '수요일':
    case '목요일':
    case '금요일':
    case '토요일':
    case '토요일':
    default:
      throw Error('입력값이 유효하지 않습니다.');
  }
}

console.log(registerDay('오타')); // Error

// 예시 3
const safeParseInt = (number, radix) => {
  return parseInt(number, radix || 10);
};
