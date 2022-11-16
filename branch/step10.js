// 명시적인 연산자 사용 지향하기

// 예시1
// 괄호를 사용해서 명시적으로 우선순위를 매긴다.
if ((isLogin && token) || user) {
}

// 예시2
// 예측 가능하고 디버깅 하기쉬운 코드(명시적)으로 작성한다.
function increment(number) {
  // number--;
  // --number;

  number = number - 1;
}
