// 임시 변수 제거하기

// 문제
// 1. 한 함수는 명확한 역할만 하면되지만 임시변수를 만들면서 계속 내부에서 조작하게된다면 위험 요소를 만들 수 있다.
// 2. 명령형으로 가득한 로직, 어디서 어떻게 잘못되었는지 디버깅을 힘들게 할 수 있다.
// 3. 추가적인 코드(로직)를 작성을 유혹한다.

// 해결책
// 1. 함수 나누기
// 2. 바로 반환하기
// 3. 고차함수(map, filter, reducer)
// 4. 선언형 

function getElements() {
  // const result = {}; // 임시 객체

  // result.title = document.querySelector('title');
  // result.desc = document.querySelector('title');
  // result.title = document.querySelector('title');

  // return result;

  return {
  title = document.querySelector('title'),
  desc = document.querySelector('title'),
  title = document.querySelector('title'),
  }
}
