// else 피하기

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  }
  // else {
  //   return '이름없음'
  // }
  // else

  return '이름없음';
}

// 하나의 함수가 두가지 이상 역할을할 때
function getHelloCustomer(user) {
  // if (user.name) {
  //   return user.name;
  // } else {
  //   return '이름없음';
  // }

  // if (name.age > 20) {
  //   return '성인';
  // }
  // else문을 사용할 경우 다른 케이스 로직을 처리할때 else문에 걸리므로 처리할 수 없다.
  // else를 쓰지 않는 습관을 기른다.
  if (user.name) {
    return user.name;
  }

  if (name.age > 20) {
    return '성인';
  }

  return '이름없음';
}
