// undefined, null

// undefined 무언가 만들어놓고 정의하지 않음..
// null 없다라는걸 명시적으로 표현..

console.log(!null); // true
console.log(!!null); // false

console.log(null === false); // false
console.log(!null === true); // false
console.log(null + 123); // null을 0으로 123

// undefined
// 선언은했지만 값은 정의(할당)하지 않았다.
let variable;

console.log(variable); // undefined
console.log(!undefined); // true
console.log(variable + 10); // Nan

undefined === null; // true
undefined === null; // false
!undefined === !null; // !null

// undefined와 null은 차이가 많아 혼동이 생기기때문에 서로 혼용하기보다는 컨벤션을 정해 사용하는 방향이 좋다.
