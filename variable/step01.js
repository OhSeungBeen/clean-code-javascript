// var를 지양하고 let, const를 사용하자

// 동일한 변수 이름으로 다른 값을 넣어도 에러가 나지 않는다.
// 선언전 변수를 사용해도 에러가나지 않는다.
console.log(name); // undefined
var name = '이름';
var name = '이름2';
name = '이름3';
console.log(name);

let phone = '전화번호';
// let으로 사용하면 에러가 발생한다.
// Identifier 'phone' has already been declared
let phone = '전화번호2';
// 재할당은 에러 발생하지 않는다.
phone = '전화번호3';
console.log(phone);

const address = '주소';
// const로 사용하면 에러가 발생한다.
// Identifier 'address' has already been declared
const address = '주소2';
// const로 사용하면 에러가 발생한다. 재할당도 할 수 없다.
// Identifier 'address' has already been declared
address = '주소3';
console.log(address);
