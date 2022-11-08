// 단축평가

// AND
console.log(true && true && '도달o'); // 도달o
console.log(true && false && '도달x'); // false

// OR
console.log(false || false || '도달o'); // 도달o
console.log(true || false || '도달x'); // true

function fetchData() {
  // if (state.data) {
  //   return state.data;
  // } else {
  //   return 'Fetching';
  // }

  // OR연산자의 단축평가 사용
  return state.data || 'Fetching';
}

function favoriteDog(someDog) {
  // let favoriteDog;
  // if (someDog) {
  //   favoriteDog = someDog;
  // } else {
  //   favoriteDog = '나옹';
  // }
  // return favoriteDog + '입니다.'

  // OR연산자의 단축평가 사용
  return (someDog || '나옹') + '입니다.';
}
