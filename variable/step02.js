// function scope, block scope

// // var
// var global = "전역";

// if (global === "전역") {
//   var global = "지역";

//   console.log(global); // 지역
// }

// // var는 함수단위 스코프이고 if는 함수가 아니기때문에 전역 스코프까지 영향을 받는다.
// console.log(global); //지역

// let, const
let global = '전역';

if (global === '전역') {
  let global = '지역';

  console.log(global); // 지역
}

{
  let global = '지역';
  console.log(global); // 지역
}

// let, const는 블록단위 스코프
// let 과 const는 블록단위 스코프이기때문에 전역 스코프에 영향을 주지않아 var보다는 안전한 코딩을 할 수 있다.
console.log(global); //전역
