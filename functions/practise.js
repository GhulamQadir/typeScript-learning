// // NORMAL FUNCTION WITH ARGUMENTS
// function karahiTotal(
//   masalaP: number,
//   yougurtP: number,
//   onionsP: number,
//   meatP: number
// ) {
//   return `Total Cost of Karahi is:  ${masalaP + yougurtP + onionsP + meatP}`;
// }
// let total = karahiTotal(100, 200, 200, 1500);
// console.log(total);
// ---------------------------------------------------------------------------------------------------
// // DEFAULT PARAMS FUNCTION
// function karahiTotal(
//   yougurtP: number,
//   onionsP: number,
//   meatP: number,
//   masalaP: number = 150 // NOTE: optional parameter have to be declared in last
// ) {
//   return `Total Cost of Karahi is:  ${masalaP + yougurtP + onionsP + meatP}`;
// }
// let total = karahiTotal(300, 250, 1600);
// console.log(total);
// ---------------------------------------------------------------------------------------------------
// // REST PARAMETERS (have to be declared in last)
// function karahiTotal(
//   yougurtP: number,
//   onionsP: number,
//   meatP: number,
//   masalaP: number,
//   ...rest: number[] // NOTE: rest param have to be declared in last
// ) {
//   let restCost = rest;
//   let otherTotal = restCost.reduce(function (a, b) {
//     // NOTE: reduce function adds array values
//     return a + b;
//   });
//   return `Total Cost of Karahi is:  ${
//     masalaP + yougurtP + onionsP + meatP + otherTotal
//   }`;
// }
// let total = karahiTotal(300, 250, 1600, 40, 200, 70);
// console.log(total);
// ---------------------------------------------------------------------------------------------------
// // SPREAD OPERATOR (spread array or object values)
// let animals = ["Cat", "Dog", "Bull", "Cow", "Hen", "Camel"];
// console.log("Spreaded array=>>> ", ...animals);
// ---------------------------------------------------------------------------------------------------
// // ARROW FUNCTION
// let cartTotal = (fruitsP: number, vegetablesP: number, tshirtP: number) => {
//   return `Total: ${fruitsP + vegetablesP + tshirtP}`;
// };
// let getTotal = cartTotal(400, 320, 900);
// console.log(getTotal);
// ---------------------------------------------------------------------------------------------------
// // IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// (function (factorialNum: number) {
//   if (factorialNum <= 1) {
//     console.log(1);
//   } else {
//     for (let i = factorialNum; i > 1; i--) {
//       factorialNum = factorialNum * (i - 1);
//     }
//     console.log(factorialNum);
//   }
// })(4);
// ---------------------------------------------------------------------------------------------------
// // RECURSIVE FUNCTION
// let bussArrives = (countDown: number) => {
//   if (countDown === 0) {
//     console.log("Buss Arrives!!");
//     return;
//   } else {
//     console.log(`Buss will arrive in ${countDown}seconds`);
//     bussArrives(countDown - 1);
//   }
// };
// bussArrives(10);
// ---------------------------------------------------------------------------------------------------
// // NESTED FUNCTION
// function dmasRule() {
//   function add(a: number, b: number) {
//     return a + b;
//   }
//   function subtract(x: number, y: number) {
//     return x - y;
//   }
//   let result = add(8, 9) - subtract(15, 6);
//   console.log(`The result is ${result}`);
// }
// dmasRule();
// ---------------------------------------------------------------------------------------------------
// setTimeOut Function
var time = 10;
var interval = setInterval(function () {
    console.log("".concat(time, " second(s) left"));
    time--;
}, 1000);
setTimeout(function () {
    clearInterval(interval);
    console.log("Times Up!");
}, 11000);
