// 유사 배열 객체

const arrayLikeObject = {
  0: 'HELLO',
  1: 'WORLD',
  length: 2,
};

const arr = Array.from(arrayLikeObject);
console.log(arr); // ['Hello', 'WORLD']
console.log(Array.isArray(arr)); // true

// 예시 1
// function arguments parameter는 대표적은 유사 배열 객체이다.
function generatePriceList() {
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
    // 100
    // 200
    // 300
    // 400
  }
  // arguments.map((argument) => console.log(argument)); // arguments.map is not a function
  // 유사배열 객체이므로 for문은 사용가능하지만, map, filter, reduce 등(고차 함수)를 사용할 수 없다.

  // 배열로 변환하면 사용 가능하다.
  const argumentArr = Array.from(arguments);
  argumentArr.map((argument) => console.log(argument));
  // 100
  // 200
  // 300
  // 400
}

generatePriceList(100, 200, 300, 400);
