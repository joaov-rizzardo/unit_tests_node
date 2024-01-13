const sumExtraHours = (salary, extraHoursValues) => salary + extraHoursValues;

const calcDiscounts = (salary, discounts) => salary - discounts;

export { sumExtraHours, calcDiscounts };

// const verify = (value) => {
//   const assertions = {
//     isExactlyEqualsTo(expected) {
//       if (value !== expected) {
//         // eslint-disable-next-line no-throw-literal
//         throw {};
//       }
//     },
//   };
//   return assertions;
// };

// const test = (title, testFunction) => {
//   try {
//     testFunction();
//     console.log(`${title} passou`);
//   } catch {
//     console.error(`${title} não passou`);
//   }
// };

// test('sumExtraHours', () => {
//   const expected = 2500;
//   const returned = sumExtraHours(2000, 500);

//   verify(returned).isExactlyEqualsTo(expected);
// });

// test('calcDiscount', () => {
//   const expected = 2300;
//   const returned = calcDiscounts(2000, 300);

//   verify(returned).isExactlyEqualsTo(expected);
// });
