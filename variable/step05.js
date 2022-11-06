// 호이스팅 주의하기

// 호이스팅 ?  런타임 시(프로그램 동작 시)에 선언과 할당이 분리되고 선언이 최상단으로 끌어 올려진다.
// 코드를 작성할때 예측하지못한 실행결과를 초례한다.

// 해결책
// 1. var 지양하고 let, const 사용
// 2. 함수도 호이스팅되기때문에 함수 표현식을 사용한다.

var sum;
// var sum = 10;

console.log(typeof sum); // function
console.log(typeof sum); // number

function sum() {
  return 1 + 2;
}

function sum() {
  return 1 + 2 + 3;
}
