// 드모르간의 법칙

// true is not true
// false is not false
// 를 이용한다.

const isValidUser = true;
const isValidToken = true;

// 예시1
// if (!(isValidToken && isValidUser)) {
//   console.log('로그인 성공!');
// }

if (!isValidToken || !isValidUser) {
  console.log('로그인 성공!');
}
