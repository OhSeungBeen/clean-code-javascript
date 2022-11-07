// min, max

// 1. 최소값과 최대값을 다룬다.
// 2. 최소값, 최대값 포함 여부를 정한다. (이상/이하, 초과/미만)
// 3. 네이미에 최소값과 최대값 포함 여부를 표현한다.

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

// 상수로 명시적으로 표현해 함수구현부를 보지않아도 쉽게 알 수 있다.
genRandomNumber(MIN_NUMBER, MAX_NUMBER);

const MAX_AGE = 20;
function isAdult(age) {
  // 최소값, 최대값이 포함되는지 안되는지
  // 이상, 초과 vs 이하, 미만
  // 컨벤션을 정한다.
  if (age > 20) {
  }
  if (age >= 20) {
  }
}
