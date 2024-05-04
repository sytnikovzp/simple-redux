'use strict';

// function* generateTest() {
//   yield 'first';
//   yield Math.ceil(Math.random() * 100);
//   yield Date.now();
//   return 'forth';
// }

// const genTest = generateTest();

// console.dir(genTest);
// console.log(genTest.next())
// console.log(genTest.next())
// console.log(genTest.next())
// console.log(genTest.next())
// console.log(genTest.next())

// for (let gen of genTest) {
//   console.log(gen);
// }

// const tests = ['zero', ...generateTest()]
// console.log(tests)

//              Iterable object

// const iterObj = {
//   from: 1,
//   to: 8,
//   [Symbol.iterator]() {
//     return {
//       curr: this.from,
//       end: this.to,
//       next() {
//         if (this.curr <= this.end) {
//           return {
//             done: false,
//             value: this.curr++,
//           };
//           return {
//             done: true,
//           };
//         }
//       },
//     };
//   },
// };

// console.log(...iterObj);

// const iterObj2 = {
//   from: 1,
//   to: 10,
//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   },
// };

// console.log(...iterObj2);

//            Nested generator

// function* generateNumbers(start, end) {
//   for (let i = start; i < end; i++) {
//     yield i;
//   }
// }

// const beggin =
//   Math.round(Math.random() * 100) < 40
//     ? 40
//     : Math.round(Math.random() * 100) > 100
//     ? 100
//     : Math.round(Math.random() * 100);

// const finish =
//   Math.round(Math.random() * 100) < beggin
//     ? beggin + 12
//     : Math.round(Math.random() * 100) > 100
//     ? 100
//     : Math.round(Math.random() * 100);

// function* generatePasswordChar() {
//   yield* generateNumbers(beggin, finish);
// }

// let str = '';

// for (let char of generatePasswordChar()) {
//   str += String.fromCharCode(char);
// }

// console.log(str);

// function* gen(a, b) {
//   const result = yield `${a} + ${b} = ?`;
//   console.log(result);
//   yield '';
//   yield a + b;
//   return 'Its true';
// }

// const generator = gen(50, 60);
// const question = generator.next().value;
// console.log(question);
// generator.next('Do you know ');
// setTimeout(() => console.log(generator.next().value), 2000);
// setTimeout(() => console.log(generator.next().value), 4000);

//    Throw exception to generator

function* genThrow() {
  try {
    const result = yield 'Throw error';
    console.log(result);
  } catch (error) {
    console.log('Throw error', error);
  }
}

const genError = genThrow();
const message = genError.next().value;

console.log(message);

genError.throw(new Error('Something went wrong'));
