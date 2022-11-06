// 전역 공간 사용 최소화

// 1.어디서나 접근 가능하기 때문에 위험요소를 만들 수 있다.
// 2. 전역변수로 만들지 않고 지역변수로 만든다.
// 3 window, globalDMF 조작하지 않는다.
// 4 let과 const를 사용한다.

// 전역 공간 ? 최상위
// 1. window(브라우저 환경)
// 2. global(Node.js 환경)

var globalVar = 'globalVar';
console.log(globalVar);

// 다른 js파일에서도 접근이 가능하다.
console.log(globalVar);

// 만약 setTimeout함수를 바꾼다면 이함수를 사용할 수 없다.
const setTimeout = 'setTimeout';
