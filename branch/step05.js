// else if 피하기

const x = 1;

if (x >= 0) {
  console.log('x >= 0');
} else if (x > 0) {
  return console.log('x > 0');
}

if (x >= 0) {
  console.log('x >= 0');
} else {
  if (x > 0) {
    return console.log('x > 0');
  }
}

// else if를 계속 쓰기보다는 else 처리를 먼저하고 if처리하는게 낫다
// else if가 많이 늘어질 경우 switch case문을 고려하자.
