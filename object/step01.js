// shorthand properties

const firstName = 'oh';
const lastName = 'seungbeen';

// const person = {
//   firstName: 'oh',
//   lastName: 'seungbeen',
//   getFullName: function () {
//     return this.firstName + this.lastName;
//   }
// }

const person = {
  firstName,
  lastName,
  getFullName: () => this.firstName + this.lastName,
};
