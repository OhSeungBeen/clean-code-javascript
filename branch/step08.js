// 부정 조건문 지양하기
// 문제점
// 1. 생각을 여러번 해야할 수 있다.
// 2. 프로그래밍 언어 자체로 if문이 처음부터오고 true부터 실행 시킨다.

// 부정조건문을 사용하는 경우 예외
// 1. Early Return
// 2. Form Validation
// 3. 보안 혹은 검사하는 로직

const isCondition = true;
const isNotCondition = false;

if (isNotCondition) {
  console.log('거짓인 경우에만 실행');
} else {
  console.log('참인 경우에만 실행');
}

if (isCondition) {
  console.log('참인 경우에만 실행');
} else {
  console.log('거짓인 경우에만 실행');
}

// 예를들어
// IsNaN function
// 숫자인지 검사를 하려면 부정을 두번
console.log(!isNaN(3));

// 차라리 함수를 만들어서 사용하는 경우가 더 낫다.
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}
console.log(isNumber(3));
