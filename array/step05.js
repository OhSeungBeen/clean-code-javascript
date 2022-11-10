// 불변성 (immutable)

const originArray = ['123', '456', '789'];

const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(newArray);
// [0, '123', '456', '789', 10, 11, 12];

// originArray만 조작했지만 newArray에 영향을 미친다.

// 불변성 지키기
// 1. 배열을 복사한다.
// 2. 새로운 배열을 반환하는 메서드를 활용한다.
// filter, map, slice 등 새로운 배열 객체로 반환하는 함수들이 존재한다.
