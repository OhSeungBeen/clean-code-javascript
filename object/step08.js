// 직접 접근 지양하기
// 예측 가능한 코드를 작성해서 동작이 예측 가능하게 만들자.

const model = {
  isLogin: false,
  isValidToken: false,
};

// model에 직접 접근 지양
// function login() {
//   model.isLogin = true;
//   model.isValidToken = true;
// }

// function logout() {
//   model.isLogin = false;
//   model.isValidToken = false;
// }

// model에 대신 접근
function setLogin(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isLogin);
}

function setValidToken(bool) {
  model.isValidToken = bool;
  serverAPI.log(model.setValidToken);
}

// model에 직접 접근하지 않고 사용
function login() {
  setLogin(ture);
  setValidToken(ture);
}
