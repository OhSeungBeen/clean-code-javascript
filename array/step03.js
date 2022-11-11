// 배열 요소에 접근하기

// 예시 1
function operateTime(input, operates, is) {
  input[0].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
  input[1].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
}

function operateTime(input, operates, is) {
  // 구조화 분해 할당을 통해 이름을 정하므로 명시적으로 배열을 접근 할 수 있다.
  // 파라미터를 통해서 바로 받을 수 도있다 input => [firstInput, secondeInput]
  const [firstInput, secondInput] = input;
  input[0].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
  input[1].split('').forEach((num) => {
    cy.get('.digit').contains(num).click();
  });
}

// 예시 2
function clickGropButton() {
  const confirmButton = document.getElementsByTagName('button')[0];
  const cancelButton = document.getElementsByTagName('button'[1]);
  const resetButton = document.getElementsByTagName('button')[2];
}

function clickGropButton() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName('button');
}

// 예시 3
function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];

  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[3];

  return `${year}년 ${month} ${day}일`;
}

// 유틸함수만드는것도 고민해본다.
function head(arr) {
  return arr[0] ?? '';
}

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split('T');
  const date = head(targetDate.toISOString().split('T'));

  const [year, month, day] = date.split('-');

  return `${year}년 ${month} ${day}일`;
}

// 이러한방법으로 암호에 접근하듯이 0, 1, 2 접근하기보다는
//  명시적으로 표현해서 코드를 깔끔하게 작성할 수 있다.
