// Nullish coalescing operator

// falsy => ||
function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = String(height || 10) + 'px';
  element.style.width = String(width || 10) + 'px';

  return element;
}

const el = createElement('div', 0, 0);
console.log(el.width); // 10
console.log(el.heihgt); // 10

// null or undefind => ??
function createElement(type, height, width) {
  const element = document.createElement(type ?? 'div');

  element.style.height = String(height ?? 10) + 'px';
  element.style.width = String(width ?? 10) + 'px';

  return element;
}

const el = createElement('div', 0, 0);
console.log(el.width); // 0
console.log(el.heihgt); // 0

// 상황에따라 ?? 또는 ||를 사용해야한다.
