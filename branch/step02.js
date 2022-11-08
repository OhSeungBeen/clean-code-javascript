// 삼항연산자 다루기
// short coding < 일관성

// 조건 ? 참(식) : 거짓(식)
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// 보기좋지 않다 switch문을 고려한다.
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    value4;
  }
}

// () 감싸기
const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';

// nullable한 상황에서 유용하게 사용 할 수 있다.
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';
};

function alertMessage(isAdult) {
  isAdult ? alert('입장 가능') : alert('입장 불가능');
  //        undefined          undefined
  // => if문을 고려한다.
  //    삼항 연산자는 값을만들어서 변수담을때 사용한다.
}
