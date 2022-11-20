// prototype 조작 지양하기

// 1. 이미 JS는 많이 발전했다.
// 1-1. 직접 만들어서 모듈화
// 1-2. NPM 배포
// 2. JS 빌트인 객체를 건드리지말자.

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + this.name;
  }
}
