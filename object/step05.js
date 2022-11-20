// Object.freeze

const STATUS = Object.freeze({
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  OPTIONS: {
    GREEN: 'GREEN',
    RED: 'RED',
  },
});

STATUS.PENDING = 'P2';
console.log(STATUS); // { PENDING: 'PENDING', SUCCESS: 'SUCCESS', FAIL: 'FAIL' }

console.log(Object.isFrozen(STATUS)); // true
console.log(Object.isFrozen(STATUS.OPTIONS)); // false

STATUS.OPTIONS.GREEN = 'G';
STATUS.OPTIONS.YELLOW = 'YELLOW';
console.log(STATUS);
// 수정된다. deep freeze는 불가능
// {
//   PENDING: 'PENDING',
//   SUCCESS: 'SUCCESS',
//   FAIL: 'FAIL',
//   OPTIONS: { GREEN: 'G', RED: 'RED', YELLOW: 'YELLOW' }
// }

// 대중적인 유틸 라이브러리 (lodash)
// 직접 유틸 함수 생성
// TypeScript readonly 사용
