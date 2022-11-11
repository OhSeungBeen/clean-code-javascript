// Early Return

function loginService(isLogin, user) {
  // 로그인 여부
  if (!isLogin) {
    // 토근 존재 여부
    if (!checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return '로그인 성공';
      }
      // 가입유저 확인
    } else {
      throw new Error('No Token');
    }
  }
}

// 함수를 미리 종료
// 사고하기 쉽다.
function loginService(isLogin, user) {
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error('No Token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();
  return ' 로그인 성공';
}
